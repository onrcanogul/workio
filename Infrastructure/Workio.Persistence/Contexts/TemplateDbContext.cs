using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Workio.Common.Models.Entities;
using Workio.Domain.Entities;
using Workio.Domain.Entities.Application;
using Workio.Domain.Entities.Category;
using Workio.Domain.Entities.Identity;
using Workio.Domain.Entities.Job;
using Workio.Domain.Entities.Payment;
using Workio.Domain.Entities.Review;

namespace Workio.Persistence.Contexts;

public class WorkioDbContext(DbContextOptions<WorkioDbContext> options, IHttpContextAccessor httpContextAccessor) : IdentityDbContext<User, Role, Guid>(options)
{
    public DbSet<Application> Applications { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Job> Jobs { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<Review> Reviews { get; set; }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        AuditingEntities();
        return base.SaveChangesAsync(cancellationToken);
    }
    public override int SaveChanges()
    {
        AuditingEntities();
        return base.SaveChanges();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Job>()
            .HasOne(j => j.Category)
            .WithMany(c => c.Jobs)
            .HasForeignKey(j => j.CategoryId);

        modelBuilder.Entity<Category>().HasQueryFilter(p => !p.IsDeleted);
        modelBuilder.Entity<Application>().HasQueryFilter(p => !p.IsDeleted);
        modelBuilder.Entity<Job>().HasQueryFilter(p => !p.IsDeleted);
        modelBuilder.Entity<Payment>().HasQueryFilter(p => !p.IsDeleted);
        modelBuilder.Entity<Review>().HasQueryFilter(p => !p.IsDeleted);
    }

    private void AuditingEntities()
    {
        var dataList = ChangeTracker.Entries<BaseEntity>().ToList();

        foreach (var data in dataList)
        {
            var baseEntity = data.Entity;
            switch (data.State)
            {
                case EntityState.Modified:
                    baseEntity.UpdatedDate = DateTime.UtcNow;
                    baseEntity.UpdatedBy = "oogul";
                    break;
                case EntityState.Added:
                    baseEntity.CreatedDate = DateTime.UtcNow;
                    baseEntity.UpdatedDate = DateTime.UtcNow;
                    baseEntity.CreatedBy = "oogul";
                    break;
            }
        }
    }
    private string? GetCurrentUsername()
        => httpContextAccessor.HttpContext?.User.Identity!.Name;
}