using System;
using System.ComponentModel.DataAnnotations;

namespace webapi.Requests
{
    public class BikeReservationRequest
    {
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public double Hours { get; set; }

        public DateTime EndTime => StartTime.AddHours(Hours);
    }
}