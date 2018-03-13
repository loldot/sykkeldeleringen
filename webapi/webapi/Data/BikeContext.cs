using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.Models;

namespace webapi.data
{
    public class BikeContext : DbContext
    {
        public BikeContext(DbContextOptions<BikeContext> options)
            : base(options) { }
        public DbSet<Bike> Bikes { get; set; }
        public DbSet<BikeLocation> BikeLocations { get; set; }
        public DbSet<BikeReservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bike>()
                .ToTable("Bikes", "bikes")
                .HasKey(b => b.Id);
            modelBuilder.Entity<BikeLocation>().HasKey(b => b.Id);
            modelBuilder.Entity<BikeReservation>()
                .ToTable("Reservations", "bikes")
                .HasKey(r => r.Id);
        }
    }
}
