using Workio.Common.Models.Entities;
using Workio.Common.Models.Enums;
using Workio.Domain.Entities.Identity;

namespace Workio.Domain.Entities.Application;

public class Application : BaseEntity
{
    public string Message { get; set; } = null!;
    public ApplicationStatus Status { get; set; } = ApplicationStatus.Pending;
    
    public Guid JobId { get; set; }
    public Guid UserId { get; set; }

    public User? User { get; set; }
    public Job.Job? Job { get; set; }
}