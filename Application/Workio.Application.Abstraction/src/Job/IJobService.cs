using Workio.Application.Abstraction.Job.Dto;
using Workio.Application.src.Abstraction.Base;

namespace Workio.Application.Abstraction.Job;

public interface IJobService : ICrudService<Domain.Entities.Job.Job, JobDto>
{
}