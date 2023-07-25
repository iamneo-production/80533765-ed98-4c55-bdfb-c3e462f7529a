using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Prepaid
    {
        [Key]
        public int planId { get; set; }
        public string planName { get; set; }
        public string planPrice { get; set; }
        [Required]
        public string planType { get; set; }
        public string planOffers { get; set; }
        public string planValidity { get; set; }
        public string planDescription { get; set; }

    }
}