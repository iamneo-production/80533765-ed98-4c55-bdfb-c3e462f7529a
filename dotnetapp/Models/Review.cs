using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
        public int PlanId { get; set; }
        public int AddonId { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
    }
}