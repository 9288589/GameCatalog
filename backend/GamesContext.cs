using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend
{
  public class GameContext : DbContext
  {
    public DbSet<Models.Game> Games { get; set; }
    /// <summary>
    /// Context Model for the Game Catalog. Use in Memory Entity Framework Code First
    /// </summary>
    /// <param name="options"></param>
    public GameContext(DbContextOptions<GameContext> options) : base(options) {  }


    protected override void OnModelCreating(ModelBuilder modelBuilder) {

      modelBuilder.Entity<Game>().HasKey(x=>x.ID);
    }
   
  }
}
