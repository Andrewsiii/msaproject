using Microsoft.EntityFrameworkCore;
using msaproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace msaproject.Data
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Character> Characters { get; set; }
        public DbSet<Town> Towns { get; set; }
        public DbSet<Comment> Comments { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Town>()
                .HasOne(t => t.Character)
                .WithMany(c => c.Towns)
                .HasForeignKey(t => t.CharacterId)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Comment>()
                .HasOne(c => c.Character)
                .WithMany(s => s.Comments)
                .HasForeignKey(c => c.CharacterId)
                .OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Comment>()
               .HasOne(c => c.Town)
               .WithMany(p => p.Comments)
               .HasForeignKey(c => c.TownId);
        }


    }

     
}
