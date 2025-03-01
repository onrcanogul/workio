using Workio.Application.Abstraction.Category.Dto;
using Workio.Application.src.Abstraction.Base;

namespace Workio.Application.Abstraction.Category;

public interface ICategoryService : ICrudService<Domain.Entities.Category.Category, CategoryDto>
{
}