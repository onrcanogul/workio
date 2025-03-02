namespace Workio.Application.Abstraction.Job.Dto;

public class FilterJobDto
{
    public Guid CategoryId { get; set; }
    public string Location { get; set; }
    public decimal? Min { get; set; }
    public decimal? Max { get; set; }
}