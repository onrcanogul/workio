using Microsoft.AspNetCore.Mvc;
using Workio.Application.Abstraction.Category;
using Workio.Application.Abstraction.Category.Dto;
using Workio.WebAPI.Controllers.Base;

namespace Workio.WebAPI.Controllers.Category;

public class CategoryController(ICategoryService service) : BaseController
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => ApiResult(await service.GetListAsync());

    [HttpPost]
    public async Task<IActionResult> Create(CategoryDto model)
        => ApiResult(await service.CreateAsync(model));
    
    [HttpPut]
    public async Task<IActionResult> Update(CategoryDto model)
        => ApiResult(await service.UpdateAsync(model));
    
    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
        => ApiResult(await service.DeleteAsync(id));
}