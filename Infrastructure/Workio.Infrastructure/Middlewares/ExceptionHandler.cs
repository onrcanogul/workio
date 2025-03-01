using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Workio.Common.Exceptions;
using Workio.Common.Models.Response;

namespace Workio.Infrastructure.Middlewares;

public class ExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {

        httpContext.Response.StatusCode = exception switch
        {
            NotFoundException => 404,
            BadRequestException => 400,
            UnauthorizedException => 401,
            ForbiddenException => 403,
            _ => 500
        };

        var response = ServiceResponse.Failure(exception.Message, httpContext.Response.StatusCode);
        await httpContext.Response.WriteAsJsonAsync(response, cancellationToken);
        return true;
    }
}
