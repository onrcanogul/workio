using Microsoft.Extensions.DependencyInjection;
using Workio.Application.Abstraction.Application;
using Workio.Application.Abstraction.Category;
using Workio.Application.Abstraction.Job;
using Workio.Application.Abstraction.src;
using Workio.Application.Application;
using Workio.Application.Category;
using Workio.Application.Job;
using Workio.Application.Job.Mappings;
using Workio.Application.src;
using Workio.Application.src.Abstraction;
using Workio.Application.src.Abstraction.Base;
using Workio.Application.src.Base;

namespace Workio.Application;

public static class ServiceRegistration
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(JobMapping).Assembly);
        services.AddScoped(typeof(ICrudService<,>), typeof(CrudService<,>));
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IJobService, JobService>();
        services.AddScoped<IApplicationService, ApplicationService>();
        //add services -> will use reflection to register all services
        return services;
    }
}