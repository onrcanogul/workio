using Workio.Application.Abstraction.Job.Dto;
using Workio.Application.Abstraction.src.User.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Enums;

namespace Workio.Application.Abstraction.Application.Dto;

public class ApplicationDto : BaseDto
{
    public string Message { get; set; } = null!;
    public ApplicationStatus Status { get; set; } = ApplicationStatus.Pending;
    
    public Guid JobId { get; set; }
    public Guid UserId { get; set; }

    public UserDto? User { get; set; }
    public JobDto? Job { get; set; }
}