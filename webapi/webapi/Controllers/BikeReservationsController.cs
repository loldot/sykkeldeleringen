using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.data;
using webapi.Models;
using webapi.Requests;

namespace webapi.Controllers
{
    [Produces("application/json"), Authorize]
    public class BikeReservationsController : Controller
    {
        private readonly BikeContext _context;

        public BikeReservationsController(BikeContext context)
        {
            _context = context;
        }

        [HttpGet("api/reservations/{id}")]
        public async Task<IActionResult> GetReservation([FromRoute] int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
                return NotFound();

            return Ok(reservation);
        }

        [HttpGet("api/bikes/{bikeId}/reservations")]
        public async Task<IEnumerable<BikeReservation>> GetReservationsForBike([FromRoute]int bikeId)
        {
            return await _context.Reservations
                .Where(r => r.BikeId == bikeId)
                .ToListAsync();
        }

        [HttpPost("api/bikes/{bikeId}/reservations")]
        public async Task<IActionResult> ReserveBike([FromRoute]int bikeId, [FromBody] BikeReservationRequest bikeReservationRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var idClaim = User.Claims.FirstOrDefault(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier");
            if (idClaim == null)
            {
                return BadRequest();
            }

            var newReservation = new BikeReservation
            {
                BikeId = bikeId,
                ReservedBy = idClaim.Value,
                StartTime = bikeReservationRequest.StartTime,
                EndTime = bikeReservationRequest.EndTime,
                IsActive = true
            };

            _context.Add(newReservation);
            await _context.SaveChangesAsync();

            return CreatedAtRoute(nameof(GetReservation), newReservation.Id, newReservation);
        }
    }
}
