using AutoMapper;
using Microsoft.Extensions.Localization;
using Workio.Application.src.Abstraction;
using Workio.Application.src.Abstraction.Dto;
using Workio.Application.src.Base;
using Workio.Domain.Entities;
using Workio.Persistence.Repository;
using Workio.Persistence.UnitOfWork;

namespace Workio.Application.src;

public class ProductService
    (IRepository<Product> repository, IMapper mapper, IUnitOfWork unitOfWork, IStringLocalizer localize)
    : CrudService<Product, ProductDto>(repository, mapper, unitOfWork, localize), IProductService
{

}