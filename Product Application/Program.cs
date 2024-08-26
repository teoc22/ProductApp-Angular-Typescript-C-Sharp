// Import necessary namespaces for configuration, dependency injection, and EF Core
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ProductAppDAL.Interfaces;
using ProductAppDAL.Implementations;
using ProductAppBL.Interfaces;
using ProductAppBL.Implementations;

// Create a WebApplication builder instance to configure services and the app
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add controllers to the services collection to enable MVC functionality
builder.Services.AddControllers();

// Configure Swagger/OpenAPI services for generating API documentation
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer(); // Add support for API explorer
builder.Services.AddSwaggerGen(); // Add Swagger generation

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from other origins
builder.Services.AddCors();

// Configure Entity Framework Core to use SQL Server with a connection string from configuration
builder.Services.AddDbContext<Product_Application.AppContext>(options =>
     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")), ServiceLifetime.Scoped);

// Register the product repository and service with the DI container using scoped lifetime
builder.Services.AddScoped<IProductRepository, ProductRespository>();
builder.Services.AddScoped<IProductService, ProductService>();

// Build the app with the configured services
var app = builder.Build();

// Configure the HTTP request pipeline.
// The middleware pipeline is set up here.

// Enable Swagger and Swagger UI only in development environment
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Enable middleware to serve generated Swagger as a JSON endpoint
    app.UseSwaggerUI(); // Enable middleware to serve Swagger UI, specifying the Swagger JSON endpoint
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enable authorization middleware to ensure that users are authenticated
app.UseAuthorization();

// Map controller routes, enabling the MVC pattern in the application
app.MapControllers();

// Enable CORS with a policy that allows any origin, header, and method
app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

// Run the application, blocking the main thread until the app shuts down
app.Run();
