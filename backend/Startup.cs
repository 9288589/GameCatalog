using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;





namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
              {
            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }));

      //services.AddDbContext<GameContext>(opt => opt.UseInMemoryDatabase("games"));
      services.AddDbContext<GameContext>(options => options.UseInMemoryDatabase("Games"));

      //var options = new DbContextOptionsBuilder<GameContext>().UseInMemoryDatabase("Games").Options;
      

     //   using (var context = new GameContext(options))
      //  {
      //   var game = new Models.Game()
      //  {
      //    gameName = "Elizabeth",
      //    gameDescription = "Lincoln",
      //    gamePhotoUrl = "23 Tsawassen Blvd.",
      //    price=0
      //  };

      //  context.Games.Add(game);
      //  context.SaveChanges();

      //}


      ///services.AddSinglgameeton<GameContext>();

      services.AddMvc();
      //services.AddMvc().AddNewtonsoftJson();
      services.AddControllers();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      

      app.UseCors("Cors");

      ///app.UseMvc();
      //.NET core 3.0 way
      app.UseRouting();
      app.UseEndpoints(endpoints =>
      {
        endpoints.MapRazorPages(); //Routes for pages
            endpoints.MapControllers(); //Routes for my API controllers
          });
    }
    
    }
}
