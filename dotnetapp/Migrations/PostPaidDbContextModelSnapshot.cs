﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dotnetapp.Context;

<<<<<<< HEAD
#nullable disable

=======
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
namespace dotnetapp.Migrations
{
    [DbContext(typeof(PostPaidDbContext))]
    partial class PostPaidDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
<<<<<<< HEAD
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);
=======
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

            modelBuilder.Entity("dotnetapp.Models.Addons", b =>
                {
                    b.Property<int>("addonId")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("addonId"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

                    b.Property<string>("addonDetails")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("addonName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("addonPrice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("addonId");

<<<<<<< HEAD
                    b.ToTable("Addons", (string)null);
=======
                    b.ToTable("Addons");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

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

<<<<<<< HEAD
                    b.ToTable("admins", (string)null);
=======
                    b.ToTable("admins");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.Login", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

<<<<<<< HEAD
                    b.ToTable("logins", (string)null);
=======
                    b.ToTable("logins");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.PostPaid", b =>
                {
                    b.Property<int>("planId")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("planId"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

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

<<<<<<< HEAD
                    b.ToTable("PostPaid", (string)null);
=======
                    b.ToTable("PostPaid");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.Recharge", b =>
                {
                    b.Property<int>("RechargeId")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RechargeId"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

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

<<<<<<< HEAD
                    b.ToTable("Recharge", (string)null);
=======
                    b.ToTable("Recharge");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

                    b.Property<int>("AddonId")
                        .HasColumnType("int");

                    b.Property<string>("Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlanId")
                        .HasColumnType("int");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.HasKey("Id");

<<<<<<< HEAD
                    b.ToTable("Review", (string)null);
=======
                    b.ToTable("Review");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });

            modelBuilder.Entity("dotnetapp.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
<<<<<<< HEAD
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);
=======
                        .HasColumnType("int")
                        .UseIdentityColumn();
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6

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

<<<<<<< HEAD
                    b.ToTable("users", (string)null);
=======
                    b.ToTable("users");
>>>>>>> c5ec9234e30cfccfa05c6d6aaa1107e15a16a1b6
                });
#pragma warning restore 612, 618
        }
    }
}
