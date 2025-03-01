using Workio.Application.Abstraction.Category.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Enums;
using Workio.Domain.Entities.Identity;

namespace Workio.Application.Abstraction.Job.Dto;

public class JobDto : BaseDto
{
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public decimal Price { get; set; }
    public string Location { get; set; } = null!;
    public JobStatus Status { get; set; }

    public Guid UserId { get; set; }
    public Guid CategoryId { get; set; }

    public User? User { get; set; }
    public CategoryDto? Category { get; set; }
    // public List<Application.Application> Applications { get; set; } = new();
}