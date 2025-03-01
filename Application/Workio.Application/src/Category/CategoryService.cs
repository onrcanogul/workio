using AutoMapper;
using Microsoft.Extensions.Localization;
using Workio.Application.Abstraction.Category;
using Workio.Application.Abstraction.Category.Dto;
using Workio.Application.src.Base;
using Workio.Persistence.Repository;
using Workio.Persistence.UnitOfWork;

namespace Workio.Application.Category;

public class CategoryService(IRepository<Domain.Entities.Category.Category> repository, IMapper mapper, IUnitOfWork unitOfWork, IStringLocalizer localize)
    : CrudService<Domain.Entities.Category.Category, CategoryDto>(repository, mapper, unitOfWork, localize), ICategoryService
{
    
}