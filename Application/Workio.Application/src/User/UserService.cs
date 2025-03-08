using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using Workio.Application.Abstraction.src;
using Workio.Application.Abstraction.src.User.Dto;
using Workio.Common.Exceptions;
using Workio.Common.Models.Response;
using Workio.Common.Models.Token;
using Workio.Domain.Entities.Identity;
using Workio.Infrastructure;

namespace Workio.Application.src;

public class UserService(UserManager<User> service, ITokenHandler tokenHandler, IMapper mapper, IHttpContextAccessor httpContextAccessor, IStringLocalizer localize)
    : IUserService
{
    public string? GetCurrentUsername() => httpContextAccessor.HttpContext?.User.Identity!.Name;

    public async Task<ServiceResponse<UserDto>> GetById(Guid id)
    {
        var user = await service.Users
        .Include(x => x.Applications.OrderByDescending(x => x.CreatedDate))
           .ThenInclude(x => x.Job)
                .ThenInclude(x => x!.User)
        .Include(x => x.Jobs.OrderByDescending(x => x.CreatedDate))
            .ThenInclude(x => x.Category)
        .FirstOrDefaultAsync(x => x.Id == id);

        var dto = mapper.Map<UserDto>(user);
        return ServiceResponse<UserDto>.Success(dto, StatusCodes.Status200OK);
    }
    public async Task<ServiceResponse<Token>> Login(LoginDto dto)
    {
        var user = await service.FindByNameAsync(dto.UsernameOrEmail) ?? await service.FindByEmailAsync(dto.UsernameOrEmail)
                   ?? throw new NotFoundException(localize["UserNotFound"].Value);
        var result = await service.CheckPasswordAsync(user, dto.Password);
        if (!result) throw new Exception();
        var token = tokenHandler.CreateToken(user);
        await UpdateRefreshTokenAsync(token.RefreshToken!, user, token.Expiration, 30);
        return ServiceResponse<Token>.Success(token, StatusCodes.Status200OK);
    }
    public async Task<ServiceResponse<Token>> LoginWithRefreshToken(string refreshToken)
    {
        var user = await service.Users.FirstOrDefaultAsync(x => x.RefreshToken == refreshToken);
        if (user == null) throw new NotFoundException(localize["UserNotFound"].Value);
        var token = tokenHandler.CreateToken(user);
        await UpdateRefreshTokenAsync(refreshToken, user, token.Expiration, 10);
        return ServiceResponse<Token>.Success(token, StatusCodes.Status200OK);
    }

    public async Task<ServiceResponse> Register(RegisterDto model)
    {
        await Validations(model);
        var user = mapper.Map<User>(model);
        var result = await service.CreateAsync(user, model.Password);
        if (!result.Succeeded)
            throw new BadRequestException(result.Errors.Select(x => x.Description).Aggregate((x, y) => $"{x}, {y}"));
        return ServiceResponse.Success(StatusCodes.Status201Created);
    }
    private async Task UpdateRefreshTokenAsync(string refreshToken, User user, DateTime accessTokenDate, int addToAccessToken)
    {
        if (user == null) throw new NotFoundException(localize["UserNotFound"].Value);
        user.RefreshToken = refreshToken;
        user.RefreshTokenExpiration = accessTokenDate.AddMinutes(addToAccessToken);
        await service.UpdateAsync(user);
    }

    private async Task Validations(RegisterDto user)
    {
        if (user.Password != user.ConfirmPassword)
            throw new BadRequestException(localize["PasswordsDoNotMatch"].Value);
        if (await service.Users.AnyAsync(x => x.UserName == user.UserName || x.Email == user.Email))
            throw new BadRequestException(localize["UserAlreadyExists"].Value);
    }
}