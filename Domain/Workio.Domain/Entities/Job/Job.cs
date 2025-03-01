using Workio.Common.Models.Entities;
using Workio.Common.Models.Enums;
using Workio.Domain.Entities.Identity;

namespace Workio.Domain.Entities.Job;

public class Job : BaseEntity
{
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public decimal Price { get; set; }
    public string Location { get; set; } = null!;
    public JobStatus Status { get; set; }

    public Guid UserId { get; set; }
    public Guid CategoryId { get; set; }

    public User? User { get; set; }
    public Category.Category? Category { get; set; }
    public List<Application.Application> Applications { get; set; } = new();
}