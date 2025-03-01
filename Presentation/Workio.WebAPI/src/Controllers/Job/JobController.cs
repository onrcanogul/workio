using Microsoft.AspNetCore.Mvc;
using Workio.Application.Abstraction.Category.Dto;
using Workio.Application.Abstraction.Job;
using Workio.Application.Abstraction.Job.Dto;
using Workio.WebAPI.Controllers.Base;

namespace Workio.WebAPI.Controllers.Job;

public class JobController(IJobService service) : BaseController
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => ApiResult(await service.GetListAsync());

    [HttpPost("filter")]
    public async Task<IActionResult> GetFilter([FromBody] FilterJobDto model)
        => ApiResult(await service.Filter(model));

    [HttpPost]
    public async Task<IActionResult> Create(JobDto model)
        => ApiResult(await service.CreateAsync(model));
    
    [HttpPut]
    public async Task<IActionResult> Update(JobDto model)
        => ApiResult(await service.UpdateAsync(model));
    
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
        => ApiResult(await service.DeleteAsync(id));
}