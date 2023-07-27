using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
using System.Data.SqlClient;
using System.Data;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Context;

namespace dotnetapp.Controllers
{
    [ApiController]
    public class RechargeController : ControllerBase
    {
        private readonly PostPaidDbContext _dbContext;
        public RechargeController(PostPaidDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    [HttpGet("user/getRecharge")]
    public ActionResult<IEnumerable<Recharge>> GetAllRechargePlans()
    {
        var postPlans = _dbContext.Recharge.ToList();
        return Ok(postPlans);
    }

    // GET api/rechargeplan/{id}
    [HttpGet("api/Recharge/{id}")]
    public ActionResult<Recharge> GetRechargePlanById(int id)
    {
        var rechargePlan = _dbContext.Recharge.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }

        return Ok(rechargePlan);
    }
     [HttpGet("api/Recharge/largeId")]
<<<<<<< HEAD
    public IActionResult Get()
=======
    public IActionResult GetlargerId()
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        int largestPlanId = _dbContext.Recharge.Max(p => p.RechargeId);
        
        // You can now use the 'largestPlanId' as needed in your response or further processing

        return Ok(largestPlanId);
    }


    // POST api/rechargeplan
    [HttpPost("api/Recharge")]
    public ActionResult<Recharge> CreateRechargePlan(Recharge rechargePlan)
    {
        _dbContext.Recharge.Add(rechargePlan);
        _dbContext.SaveChanges();

<<<<<<< HEAD
        return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.RechargeId }, rechargePlan);
=======
        return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.RechargeId ,Message = "Recharge successfully done."}, rechargePlan);
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    }

    [HttpPut("api/Recharge")]
    public ActionResult<Recharge> UpdateRechargePlan(Recharge updatedPlan)
    {
        var existingPlan = _dbContext.Recharge.Find(updatedPlan.RechargeId);

        if (existingPlan == null)
        {
            return NotFound();
        }

        existingPlan.RechargeType  = updatedPlan.RechargeType ;
        existingPlan.UName  = updatedPlan.UName ;
        existingPlan.Mobile  = updatedPlan.Mobile ;
        existingPlan.Email  = updatedPlan.Email ;
        existingPlan.RechargePlan  = updatedPlan.RechargePlan ;
        existingPlan.RechargePrice  = updatedPlan.RechargePrice ;
<<<<<<< HEAD
=======
        existingPlan.PlanId=updatedPlan.PlanId;
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3

        // Update other properties as needed

        _dbContext.SaveChanges();

        return Ok(existingPlan);
    }
    // PUT api/rechargeplan/{id}
    [HttpPut("api/Recharge/{id}")]
<<<<<<< HEAD
    public ActionResult<Addons> UpdateRechargePlan(int id, Recharge updatedPlan)
=======
    public ActionResult<Addons> UpdateRechargePlanById(int id, Recharge updatedPlan)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var existingPlan = _dbContext.Recharge.Find(id);

        if (existingPlan == null)
        {
            return NotFound();
        }
        existingPlan.RechargeType  = updatedPlan.RechargeType ;
        existingPlan.UName  = updatedPlan.UName ;
        existingPlan.Mobile  = updatedPlan.Mobile ;
        existingPlan.Email  = updatedPlan.Email ;
        existingPlan.RechargePlan  = updatedPlan.RechargePlan ;
        existingPlan.RechargePrice  = updatedPlan.RechargePrice ;
<<<<<<< HEAD
=======
        existingPlan.PlanId=updatedPlan.PlanId;
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3

        _dbContext.SaveChanges();

        return Ok(existingPlan);
    }

    // DELETE api/rechargeplan/{id}
    [HttpDelete("api/Recharge/{id}")]
<<<<<<< HEAD
    public ActionResult DeleteRechargePlan(int id)
=======
    public ActionResult DeleteRechargePlanById(int id)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var rechargePlan = _dbContext.Recharge.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }

        _dbContext.Recharge.Remove(rechargePlan);
        _dbContext.SaveChanges();

        return NoContent();
    }
<<<<<<< HEAD
=======
    [HttpGet("api/recharges/{mobileNumber}")]
        public IActionResult GetRechargesByMobileNumber(string mobileNumber)
        {
            // Use the mobileNumber parameter to query the database and get recharge details.
            // Assuming you have a Recharge model and DbContext, you can use LINQ to retrieve data.
            var recharges = _dbContext.Recharge.Where(r => r.Mobile == mobileNumber).ToList();

            return Ok(recharges);
        }

>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    }
}