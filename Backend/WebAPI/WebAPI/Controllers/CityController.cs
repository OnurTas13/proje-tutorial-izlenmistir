using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Data.Repo;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext _dc;
        private readonly ICityRepository repo;

        public CityController(DataContext dc, ICityRepository repo)
        {
            this._dc = dc;
            this.repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await repo.GetCitiesAsync();
            return Ok(cities);
        }

        //[HttpPost("add")]
        //[HttpPost("add/{cityName}")]
        //public async Task<IActionResult> AddCity(string cityName)
        //{
        //    City city = new City();
        //    city.Name = cityName;
        //    await _dc.Cities.AddAsync(city);
        //    await _dc.SaveChangesAsync();
        //    return Ok(city);
        //}
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {      
            repo.AddCity(city);
            await repo.SaveAsync();
            return Ok(city);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            repo.DeleteCity(id);
            await repo.SaveAsync();
            return Ok(id);
        }

        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "Atlanta", "New York", "Chicago", "Boston" };
        //}
        //[HttpGet("{id}")]
        //public int Get(int id)
        //{
        //    return id;
        //}
    }
}
