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
    [Route("api/Bikes")]
    [Authorize]
    public class BikesController : Controller
    {
        private readonly BikeContext _context;
        private const string radiusSearchQuery = @"select B.* 
from bikes.Bikes B inner
join
bikes.Locations L on B.ID = L.BikeId
where L.[Location].STDistance(geography::Point({0}, {1}, 4326)) <= {2}";

        public BikesController(BikeContext context)
        {
            _context = context;
        }

        // GET: api/Bikes
        [HttpGet]
        public async Task<IEnumerable<Bike>> GetBikes([FromQuery] double? lat, [FromQuery] double? @long, [FromQuery] double radius = 5000)
        {
            if (lat.HasValue && @long.HasValue)
            {
                return await _context.Bikes.FromSql(radiusSearchQuery, lat, @long, radius).ToListAsync();
            }
            return await _context.Bikes.ToListAsync();
        }

        // GET: api/Bikes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBike([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bike = await _context.Bikes.SingleOrDefaultAsync(m => m.Id == id);

            if (bike == null)
            {
                return NotFound();
            }

            return Ok(bike);
        }

        // PUT: api/Bikes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBike([FromRoute] int id, [FromBody] Bike bike)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bike.Id)
            {
                return BadRequest();
            }

            _context.Entry(bike).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BikeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bikes
        [HttpPost]
        public async Task<IActionResult> PostBike([FromBody] Bike bike)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Bikes.Add(bike);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBike", new { id = bike.Id }, bike);
        }

        // DELETE: api/Bikes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBike([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bike = await _context.Bikes.SingleOrDefaultAsync(m => m.Id == id);
            if (bike == null)
            {
                return NotFound();
            }

            _context.Bikes.Remove(bike);
            await _context.SaveChangesAsync();

            return Ok(bike);
        }

        private bool BikeExists(int id)
        {
            return _context.Bikes.Any(e => e.Id == id);
        }
    }
}