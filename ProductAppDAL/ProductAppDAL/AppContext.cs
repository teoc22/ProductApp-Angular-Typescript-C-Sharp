// Import necessary namespaces for EF Core and entity management
using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using Product_Application.Entities;

namespace Product_Application
{
    // Represents the application's database context, derived from DbContext
    public class AppContext : DbContext
    {
        // Constructor that passes the DbContext options to the base class
        public AppContext(DbContextOptions<AppContext> options) : base(options) { }

        // DbSet for managing User entities, which maps to the Users table in the database
        public DbSet<User> Users { get; set; }

        // DbSet for managing Product entities, which maps to the Product table in the database
        public DbSet<Product> Product { get; set; }
    }
}
