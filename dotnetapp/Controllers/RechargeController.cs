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
    public IActionResult Get()
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

        return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.RechargeId }, rechargePlan);
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

        // Update other properties as needed

        _dbContext.SaveChanges();

        return Ok(existingPlan);
    }
    // PUT api/rechargeplan/{id}
    [HttpPut("api/Recharge/{id}")]
    public ActionResult<Addons> UpdateRechargePlan(int id, Recharge updatedPlan)
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

        _dbContext.SaveChanges();

        return Ok(existingPlan);
    }

    // DELETE api/rechargeplan/{id}
    [HttpDelete("api/Recharge/{id}")]
    public ActionResult DeleteRechargePlan(int id)
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
    }
}