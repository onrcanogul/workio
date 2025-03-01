using Microsoft.AspNetCore.Mvc;
using Workio.Common.Models.Response;

namespace Workio.WebAPI.Controllers.Base;

[Route("api/[controller]")]
[ApiController]
public class BaseController : ControllerBase
{
    protected static IActionResult ApiResult<T>(ServiceResponse<T> response)
        => new ObjectResult(response) { StatusCode = response.StatusCode };

    protected static IActionResult ApiResult(ServiceResponse response)
        => new ObjectResult(response) { StatusCode = response.StatusCode };
}