using AutoMapper;
using Workio.Application.Abstraction.src.User.Dto;
using Workio.Domain.Entities.Identity;

namespace Workio.Application.src.Mapping;

public class UserMapping : Profile
{
    public UserMapping()
    {
        CreateMap<User, RegisterDto>().ReverseMap();
        CreateMap<User, UserDto>().ReverseMap();
    }
}