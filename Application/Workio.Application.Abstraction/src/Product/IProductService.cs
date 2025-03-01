using Workio.Application.src.Abstraction.Base;
using Workio.Application.src.Abstraction.Dto;
using Workio.Domain.Entities;

namespace Workio.Application.src.Abstraction;

public interface IProductService : ICrudService<Product, ProductDto>
{
}