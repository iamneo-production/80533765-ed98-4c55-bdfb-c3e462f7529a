using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnetapp.Context
{
    public class PostPaidDbContext:DbContext
   {
    public DbSet<PostPaid> PostPaid { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Admin> Admins { get; set; }
    public DbSet<Login> Logins { get; set; }
    public DbSet<Addons> Addons {get; set;}
    public DbSet<Recharge> Recharge {get; set;}
    public DbSet<Review> Review{get;set;}
    

     public PostPaidDbContext(DbContextOptions<PostPaidDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
            modelBuilder.Entity<PostPaid>().ToTable("PostPaid");
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Admin>().ToTable("admins");
            modelBuilder.Entity<Login>().ToTable("logins");
            modelBuilder.Entity<Addons>().ToTable("Addons");
            modelBuilder.Entity<Recharge>().ToTable("Recharge");
            modelBuilder.Entity<Review>().ToTable("Review");

    }
   }
  
}