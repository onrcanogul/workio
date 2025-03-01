using Workio.Application.Abstraction.Job.Dto;
using Workio.Common.Models.Dtos;

namespace Workio.Application.Abstraction.Category.Dto;

public class CategoryDto : BaseDto
{
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string? BackgroundImage { get; set; }
    public List<JobDto> Jobs { get; set; } = new();
}