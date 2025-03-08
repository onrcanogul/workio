using Microsoft.AspNetCore.Mvc;
using Workio.Application.Abstraction.src;
using Workio.Application.Abstraction.src.User.Dto;
using Workio.WebAPI.Controllers.Base;

namespace Workio.WebAPI.Controllers;

public class UserController(IUserService service) : BaseController
{
    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get([FromRoute] Guid id)
        => ApiResult(await service.GetById(id));

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
        => ApiResult(await service.Login(dto));

    [HttpPost("refresh-token-login/{refreshToken}")]
    public async Task<IActionResult> RefreshTokenLogin([FromRoute] string refreshToken)
        => ApiResult(await service.LoginWithRefreshToken(refreshToken));

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto user)
        => ApiResult(await service.Register(user));
}