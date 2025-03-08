using Workio.Application.Abstraction.src.User.Dto;
using Workio.Common.Models.Response;
using Workio.Common.Models.Token;

namespace Workio.Application.Abstraction.src;

public interface IUserService
{
    Task<ServiceResponse<UserDto>> GetById(Guid id);
    Task<ServiceResponse<Token>> Login(LoginDto dto);
    Task<ServiceResponse<Token>> LoginWithRefreshToken(string refreshToken);
    Task<ServiceResponse> Register(RegisterDto model);
}