using AutoMapper;
using Workio.Application.Abstraction.Category.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Entities;

namespace Workio.Application.Category.Mappings;

public class CategoryMapping : Profile
{
    public CategoryMapping()
    {
        CreateMap<Domain.Entities.Category.Category, CategoryDto>()
            .IncludeBase<BaseEntity, BaseDto>();
        CreateMap<CategoryDto, Domain.Entities.Category.Category>()
            .IncludeBase<BaseDto, BaseEntity>();
        CreateMap<BaseEntity, BaseDto>().ReverseMap();
    }
}