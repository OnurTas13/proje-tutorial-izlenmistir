using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<City, CityDto>().ReverseMap();
            CreateMap<City, CityUpdateDto>().ReverseMap();
            CreateMap<PropertyType, KeyValuePairDto>().ReverseMap();
            CreateMap<PropertyDto, Property>().ReverseMap();
            CreateMap<FurnishingType, KeyValuePairDto>().ReverseMap();
            CreateMap<Property, PropertyListDto>()
                .ForMember(p => p.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
                .ForMember(p => p.City, opt => opt.MapFrom(src => src.City.Name))
                .ForMember(p => p.Country, opt => opt.MapFrom(src => src.City.Country))
                .ForMember(p => p.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name));
            CreateMap<Property, PropertyDetailDto>()
                .ForMember(p => p.PropertyType, opt => opt.MapFrom(src => src.PropertyType.Name))
                .ForMember(p => p.City, opt => opt.MapFrom(src => src.City.Name))
                .ForMember(p => p.Country, opt => opt.MapFrom(src => src.City.Country))
                .ForMember(p => p.FurnishingType, opt => opt.MapFrom(src => src.FurnishingType.Name));

        }
    }
}
