using Microsoft.AspNetCore.Mvc;
using Workio.Application.Abstraction.Application;
using Workio.Application.Abstraction.Application.Dto;
using Workio.WebAPI.Controllers.Base;

namespace Workio.WebAPI.Controllers.Application;

public class ApplicationController(IApplicationService service) : BaseController
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => ApiResult(await service.GetListAsync());

    [HttpPost]
    public async Task<IActionResult> Create(ApplicationDto model)
        => ApiResult(await service.CreateAsync(model));
    
    [HttpPut]
    public async Task<IActionResult> Update(ApplicationDto model)
        => ApiResult(await service.UpdateAsync(model));
    
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
        => ApiResult(await service.DeleteAsync(id));
}