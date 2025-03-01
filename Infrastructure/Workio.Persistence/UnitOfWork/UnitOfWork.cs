using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Workio.Persistence.Contexts;

namespace Workio.Persistence.UnitOfWork;

public class UnitOfWork(WorkioDbContext context) : IUnitOfWork
{
    public void Commit()
    {
        context.SaveChanges();
    }
    public async Task CommitAsync()
    {
        await context.SaveChangesAsync();
    }
}