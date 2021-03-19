using backend;
using backend.Controllers;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using Xunit;




namespace XUnitTestGamesDatabase
{
  public class GameDbContext : DbContext
  {
    public DbSet<Game> Games { get; set; }

    public GameDbContext(DbContextOptions<GameDbContext> options) : base(options)
    {
    }
  }
  public class GameControllerTest
    {
    private static DbContextOptions<GameDbContext> CreateNewContextOptions()
    {
      // Create a fresh service provider, and therefore a fresh 
      // InMemory database instance.
      var serviceProvider = new ServiceCollection()
          .AddEntityFrameworkInMemoryDatabase()
          .BuildServiceProvider();

      // Create a new options instance telling the context to use an
      // InMemory database and the new service provider.
      var builder = new DbContextOptionsBuilder<GameDbContext>();
      builder.UseInMemoryDatabase("GamesDatabase").UseInternalServiceProvider(serviceProvider);

      return builder.Options;
    }





    [Fact(DisplayName = "Find Game  from the database")]
    public void findGameById()
        {

      var dbContext = new GameDbContext(CreateNewContextOptions());

      // add one item
      var game1 = new Game();
      game1.gameName = "Game 1";
      game1.gameDescription = "Game 1 Description";
      game1.gamePhotoUrl = "Game Photo Url 1";
      game1.price = "25.5";

      dbContext.Games.Add(game1);
      dbContext.SaveChanges();

      // gameName should be Game 1
      Assert.Equal("Game 1", game1.gameName);

      dbContext.Database.EnsureDeleted();

      

      var game2 = new Game();
      game2.gameName = "Game 2";
      game2.gameDescription = "Game 2 Description";
      game2.gamePhotoUrl = "Game Photo Url 2";
      game2.price = "30.5";


      dbContext.Games.Add(game2);
      dbContext.SaveChanges();

      // ID should STILL be 1
      Assert.Equal("Game 2", game2.gameName);

      }
     [Fact(DisplayName = "Find Game Description")]
      public void findDescriptionByName()
        {
      var dbContext = new GameDbContext(CreateNewContextOptions());

      // add one item
      var game1 = new Game();
      game1.gameName = "Game 1";
      game1.gameDescription = "Game 1 Description";
      game1.gamePhotoUrl = "Game Photo Url 1";
      game1.price = "25.5";

      dbContext.Games.Add(game1);
      dbContext.SaveChanges();

      // gameName should be Game 1 Description
      Assert.Equal("Game 2 Description", game1.gameDescription);

      dbContext.Database.EnsureDeleted();



      var game2 = new Game();
      game2.gameName = "Game 2";
      game2.gameDescription = "Game 2 Description";
      game2.gamePhotoUrl = "Game Photo Url 2";
      game2.price = "30.5";


      dbContext.Games.Add(game2);
      dbContext.SaveChanges();

      // ID should STILL be 1
      Assert.Equal("Game 2 Description", game2.gameDescription);


    }

  }
}
  
