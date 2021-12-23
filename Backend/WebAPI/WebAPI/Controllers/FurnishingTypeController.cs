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
    public class FurnishingTypeController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public FurnishingTypeController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet("list")]
        public async Task<IActionResult> GetFurnishingType()
        {
            var furnishingType = await uow.FurnishingTypeRepository.GetFurnishingTypesAsync();
            var furnishingTypeDto = mapper.Map<IEnumerable<KeyValuePairDto>>(furnishingType);
            return Ok(furnishingTypeDto);
        }
    }
}
