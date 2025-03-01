using Workio.Common.Models.Entities;

namespace Workio.Domain.Entities.Review;

public class Review : BaseEntity
{
    public Guid JobId { get; set; }
    public Guid ReviewerId { get; set; }
    public Guid WorkerId { get; set; }
    public int Rating { get; set; } // max 5, min 1
    public string? Comment { get; set; }
}