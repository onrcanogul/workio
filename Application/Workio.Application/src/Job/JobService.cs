using AutoMapper;
using Microsoft.Extensions.Localization;
using Workio.Application.Abstraction.Job;
using Workio.Application.Abstraction.Job.Dto;
using Workio.Application.src.Base;
using Workio.Persistence.Repository;
using Workio.Persistence.UnitOfWork;

namespace Workio.Application.Job;

public class JobService(IRepository<Domain.Entities.Job.Job> repository, IMapper mapper, IUnitOfWork unitOfWork, IStringLocalizer localize)
    : CrudService<Domain.Entities.Job.Job, JobDto>(repository, mapper, unitOfWork, localize), IJobService
{
}