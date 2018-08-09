using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi;
using webapi.data;

namespace webapi.Controllers
{
    [Produces("application/json")]
    [Route("api/BikeLocations")]
    [Authorize]
    public class BikeLocationsController : Controller
    {
        private readonly BikeContext _context;

        public BikeLocationsController(BikeContext context)
        {
            _context = context;
        }

        // GET: api/BikeLocations
        [HttpGet]
        public async Task<IEnumerable<BikeLocation>> GetBikeLocations()
        {
            return await _context.BikeLocations
                            .FromSql("select * from bikes.vwBikeLocations;")
                            .ToListAsync();
        }

        // GET: api/bikes/5/location
        [HttpGet("/api/bikes/{bikeId}/location")]
        public async Task<IActionResult> GetBikeLocation([FromRoute] int bikeId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bikeLocation = await _context.BikeLocations
                            .FromSql("select * from bikes.vwBikeLocations where BikeId = {0}", bikeId)
                            .FirstAsync();

            if (bikeLocation == null)
            {
                return NotFound();
            }

            return Ok(bikeLocation);
        }

     
        private bool BikeLocationExists(int id)
        {
            return _context.BikeLocations.Any(e => e.Id == id);
        }
    }
}