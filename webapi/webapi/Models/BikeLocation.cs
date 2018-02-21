using System;
using System.Collections.Generic;
using System.Linq;
using System.Spatial;
using System.Threading.Tasks;

namespace webapi
{
    public class BikeLocation
    {
        public int Id { get; set; }
        public int BikeId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
