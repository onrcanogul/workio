using AutoMapper;
using Workio.Application.Abstraction.Job.Dto;
using Workio.Common.Models.Dtos;
using Workio.Common.Models.Entities;

namespace Workio.Application.Job.Mappings;

public class JobMapping : Profile
{
    public JobMapping()
    {
        CreateMap<Domain.Entities.Job.Job, JobDto>()
            .IncludeBase<BaseEntity, BaseDto>();
        CreateMap<JobDto, Domain.Entities.Job.Job>()
            .IncludeBase<BaseDto, BaseEntity>();
        CreateMap<BaseEntity, BaseDto>().ReverseMap();
    }
}