using Serilog;
using Workio.Application;
using Workio.Infrastructure;
using Workio.Persistence;
using Workio.WebAPI.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSwaggerServices()
    .AddLocalizationServices()
    .AddCorsServices()
    .AddJsonSerializerServices()
    .AddRateLimiterServices()
    .AddPersistenceServices(builder.Configuration)
    .AddOpenTelemetryServices()
    .AddApplicationServices()
    .AddInfrastructureServices(builder.Configuration)
    .AddSerilogServices(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        corsPolicyBuilder =>
        {
            corsPolicyBuilder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

builder.Host.UseSerilog();
var app = builder.Build();
app.UseCors("AllowAll"); 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerMiddleware();
}
app.UseCorsServices();
app.UseLocalizationServices();
app.UseInfrastructureServices();
app.UseRateLimiter();
app.UseHttpsRedirection();
app.UseRouting();
app.MapControllers();
app.Run();
