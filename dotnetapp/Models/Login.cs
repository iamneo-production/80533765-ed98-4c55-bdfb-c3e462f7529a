using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get;set;}

    }
}