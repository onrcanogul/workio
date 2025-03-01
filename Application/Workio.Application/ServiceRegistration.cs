using Microsoft.Extensions.DependencyInjection;
using Workio.Application.Abstraction.Category;
using Workio.Application.Abstraction.Job;
using Workio.Application.Abstraction.src;
using Workio.Application.Category;
using Workio.Application.Job;
using Workio.Application.src;
using Workio.Application.src.Abstraction;
using Workio.Application.src.Abstraction.Base;
using Workio.Application.src.Base;
using Workio.Application.src.Mappings;

namespace Workio.Application;

public static class ServiceRegistration
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(ProductMapping).Assembly);
        services.AddScoped(typeof(ICrudService<,>), typeof(CrudService<,>));
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<IJobService, JobService>();
        //add services -> will use reflection to register all services
        return services;
    }
}