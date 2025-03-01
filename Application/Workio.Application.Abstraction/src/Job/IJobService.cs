using Workio.Application.Abstraction.Job.Dto;
using Workio.Application.src.Abstraction.Base;
using Workio.Common.Models.Response;

namespace Workio.Application.Abstraction.Job;

public interface IJobService : ICrudService<Domain.Entities.Job.Job, JobDto>
{
    Task<ServiceResponse<List<JobDto>>> Filter(FilterJobDto model);
}