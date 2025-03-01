using Workio.Common.Models.Entities;
using Workio.Common.Models.Enums;
using Workio.Domain.Entities.Identity;

namespace Workio.Domain.Entities.Payment;

public class Payment : BaseEntity
{
    public decimal Amount { get; set; }
    public PaymentStatus Status { get; set; }
    
    public Guid JobId { get; set; }
    public Guid PayerId { get; set; }
    public Guid PayeeId { get; set; }

    public Job.Job? Job { get; set; }
    public User? Payer { get; set; }
    public User? Payee { get; set; }
}