using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Localization;
using Workio.Application.Abstraction.Job;
using Workio.Application.Abstraction.Job.Dto;
using Workio.Application.src.Base;
using Workio.Common.Models.Response;
using Workio.Infrastructure.Extensions;
using Workio.Persistence.Repository;
using Workio.Persistence.UnitOfWork;

namespace Workio.Application.Job;

public class JobService(IRepository<Domain.Entities.Job.Job> repository, IMapper mapper, IUnitOfWork unitOfWork, IStringLocalizer localize)
    : CrudService<Domain.Entities.Job.Job, JobDto>(repository, mapper, unitOfWork, localize), IJobService
{
    public async Task<ServiceResponse<List<JobDto>>> Filter(FilterJobDto model)
    {
        var query = repository.GetQueryable()
            .Include(x => x.Category)
            .WhereIf(model.CategoryId != Guid.Empty, x => x.CategoryId == model.CategoryId)
            .WhereIf(model.Location != string.Empty, x => x.Location.Contains(model.Location))
            .WhereIf(model.Min != 0 && model.Min != null, x => x.Price >= model.Min)
            .WhereIf(model.Max != 0 && model.Max != null, x => x.Price <= model.Max);
        
        var dto = mapper.Map<List<JobDto>>(await query.ToListAsync());
        
        return ServiceResponse<List<JobDto>>.Success(dto, StatusCodes.Status200OK);
    }
}