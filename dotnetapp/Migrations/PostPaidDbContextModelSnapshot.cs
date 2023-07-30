﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dotnetapp.Context;

#nullable disable

namespace dotnetapp.Migrations
{
    [DbContext(typeof(PostPaidDbContext))]
    partial class PostPaidDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("dotnetapp.Models.Addons", b =>
                {
                    b.Property<int>("addonId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("addonId"), 1L, 1);

                    b.Property<string>("addonDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("addonName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("addonPrice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("addonId");

                    b.ToTable("Addons", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("admins", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.Login", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("logins", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.PostPaid", b =>
                {
                    b.Property<int>("planId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("planId"), 1L, 1);

                    b.Property<string>("planDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planOffers")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planValidity")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("planId");

                    b.ToTable("PostPaid", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.Recharge", b =>
                {
                    b.Property<int>("RechargeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RechargeId"), 1L, 1);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mobile")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<string>("RechargePlan")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RechargePrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RechargeType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RechargeId");

                    b.ToTable("Recharge", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("AddonId")
                        .HasColumnType("int");

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Review", (string)null);
                });

            modelBuilder.Entity("dotnetapp.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MobileNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Role")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("users", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
