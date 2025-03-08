using Microsoft.AspNetCore.Identity;

namespace Workio.Domain.Entities.Identity;

public class User : IdentityUser<Guid>
{
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiration { get; set; }
    public List<Job.Job> Jobs { get; set; } = [];
    public List<Application.Application> Applications { get; set; } = [];
}