using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using webapi.data;

namespace webapi
{
    public class Startup
    {
        private static ILoggerFactory loggerFactory = new LoggerFactory(new[] { new ConsoleLoggerProvider((str, level) => true, true) });

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = Configuration.GetConnectionString("BikesDatabase");

            services.AddMvc();
            services.AddDbContext<BikeContext>(opts => opts
                .UseSqlServer(connectionString)
                .UseLoggerFactory(loggerFactory));
            

            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                })
                .AddJwtBearer(cfg =>
                {
                    cfg.Authority = $"https://login.microsoft.com/{Configuration["AADTenantId"]}";
                    cfg.Audience = Configuration["AADClientId"];

                    //cfg.TokenValidationParameters = new TokenValidationParameters
                    //{
                    //    ValidIssuer = Configuration["JwtIssuer"],
                    //    ValidAudience = Configuration["JwtIssuer"],
                    //    ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    //};
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(p =>
                {
                    p.AllowAnyOrigin();
                    p.AllowAnyHeader();
                    p.AllowAnyMethod();
                });
            }
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
