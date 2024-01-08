﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebAppTestePS.Models;

namespace WebAppTestePS.Services
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        { 
        
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var admin = new IdentityRole("admin");
            admin.NormalizedName = "admin";

            var client = new IdentityRole("client");
            client.NormalizedName = "client";

            var seller = new IdentityRole("seller");
            client.NormalizedName = "seller";

            builder.Entity<IdentityRole>().HasData(admin, client, seller);
        }
    }
}
