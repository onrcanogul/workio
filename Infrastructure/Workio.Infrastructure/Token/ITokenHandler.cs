using Workio.Common.Models.Token;
using Workio.Domain.Entities.Identity;

namespace Workio.Infrastructure;

public interface ITokenHandler
{
    Token CreateToken(User user);
}