using Workio.Application.Abstraction.Application.Dto;
using Workio.Application.Abstraction.Job.Dto;

namespace Workio.Application.Abstraction.src.User.Dto;

public class UserDto
{
    public Guid Id { get; set; }
    public string Email { get; set; } = null!;
    public string Username { get; set; } = null!;
    public List<JobDto> Jobs { get; set; } = [];
    public List<ApplicationDto> Applications { get; set; } = [];
}