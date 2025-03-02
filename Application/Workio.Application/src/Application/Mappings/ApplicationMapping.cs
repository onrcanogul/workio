using AutoMapper;
using Workio.Application.Abstraction.Application.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Entities;

namespace Workio.Application.Application.Mappings;

public class ApplicationMapping : Profile
{
    public ApplicationMapping()
    {
        CreateMap<Domain.Entities.Application.Application, ApplicationDto>()
            .IncludeBase<BaseEntity, BaseDto>();
        CreateMap<ApplicationDto, Domain.Entities.Application.Application>()
            .IncludeBase<BaseDto, BaseEntity>();
        CreateMap<BaseEntity, BaseDto>().ReverseMap();
    }
}