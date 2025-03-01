using Workio.Common.Models.Entities;

namespace Workio.Domain.Entities.Category;

public class Category : BaseEntity
{
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string? BackgroundImage { get; set; }
    public List<Job.Job> Jobs { get; set; } = new();
}