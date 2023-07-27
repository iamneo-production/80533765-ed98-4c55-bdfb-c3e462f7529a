using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class Recharge
    {
        [Key]
    public int RechargeId { get; set; }
    public string RechargeType { get; set; }
    public string UName { get; set; }
    public string Mobile { get; set; }
    public string Email { get; set; }
    public string RechargePlan { get; set; }
    public string RechargePrice { get; set; }
<<<<<<< HEAD
=======
    public int PlanId{get;set;}
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    }
}
