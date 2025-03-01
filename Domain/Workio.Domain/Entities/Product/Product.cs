using System.Collections.Generic;
using Workio.Common.Models.Entities;

namespace Workio.Domain.Entities;

public class Product : BaseEntity
{
    public string Name { get; set; } = null!;
    public string Description { get; set; } = null!;
    public int Likes { get; set; }
    public int Dislikes { get; set; }
    public double Rating { get; set; }
    public List<string> Comments { get; set; } = new();
}