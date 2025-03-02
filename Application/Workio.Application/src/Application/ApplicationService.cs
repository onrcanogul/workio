using AutoMapper;
using Microsoft.Extensions.Localization;
using Workio.Application.Abstraction.Application;
using Workio.Application.Abstraction.Application.Dto;
using Workio.Application.src.Base;
using Workio.Persistence.Repository;
using Workio.Persistence.UnitOfWork;

namespace Workio.Application.Application;

public class ApplicationService(IRepository<Domain.Entities.Application.Application> repository, IMapper mapper, IUnitOfWork unitOfWork, IStringLocalizer localize) 
    : CrudService<Domain.Entities.Application.Application, ApplicationDto>(repository, mapper, unitOfWork, localize), IApplicationService
{
}