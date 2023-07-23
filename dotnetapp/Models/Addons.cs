using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace dotnetapp.Models
{
    public class Addons
    {
        [Key]
        public int addonId { get; set; }

        public string addonName { get; set; } 

        public string addonPrice { get; set; }

        public string addonDetails { get; set; }

    }
}