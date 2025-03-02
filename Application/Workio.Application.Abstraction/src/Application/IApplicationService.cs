using Workio.Application.Abstraction.Application.Dto;
using Workio.Application.src.Abstraction.Base;

namespace Workio.Application.Abstraction.Application;

public interface IApplicationService : ICrudService<Domain.Entities.Application.Application, ApplicationDto>
{
}