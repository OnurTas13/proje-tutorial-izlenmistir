using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    public class PropertyTypeController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public PropertyTypeController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet("list")]
        public async Task<IActionResult> GetPropertyTypes()
        {
            var propertyTypes = await uow.PropertyTypeRepository.GetPropertyTypesAsync();
            var propertytypeDto = mapper.Map<IEnumerable<KeyValuePairDto>>(propertyTypes);
            return Ok(propertytypeDto);
        }



    }
}


