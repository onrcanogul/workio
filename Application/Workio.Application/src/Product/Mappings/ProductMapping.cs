using AutoMapper;
using Workio.Application.src.Abstraction.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Entities;
using Workio.Domain.Entities;

namespace Workio.Application.src.Mappings;

public class ProductMapping : Profile
{
    public ProductMapping()
    {
        CreateMap<Product, ProductDto>()
            .IncludeBase<BaseEntity, BaseDto>();
        CreateMap<ProductDto, Product>()
            .IncludeBase<BaseDto, BaseEntity>();
        CreateMap<BaseEntity, BaseDto>().ReverseMap();
    }
}