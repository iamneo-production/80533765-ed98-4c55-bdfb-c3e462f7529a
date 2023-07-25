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
    public class PlansController : ControllerBase
    {
        private readonly PrepaidDbContext _dbContext;
        public PlansController(PrepaidDbContext dbContext)
        {
            _dbContext = dbContext;
        }

         // GET api/rechargeplan
    [HttpGet("admin/getAllPlan")]
    public ActionResult<IEnumerable<Prepaid>> GetAllRechargePlans()
    {
        var PrePlans = _dbContext.Prepaid.ToList();
        return Ok(PrePlans);
    }

    // GET api/rechargeplan/{id}
    [HttpGet("api/plans/{id}")]
    public ActionResult<Prepaid> GetRechargePlanById(int id)
    {
        var rechargePlan = _dbContext.Prepaid.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }

        return Ok(rechargePlan);
    }

    // POST api/rechargeplan
    [HttpPost("api/rechargeplan")]
    public ActionResult<Prepaid> CreateRechargePlan(Prepaid rechargePlan)
    {
        // Check if a plan with the same details already exists
        var existingPlan = _dbContext.Prepaid.FirstOrDefault(plan =>
            plan.planName == rechargePlan.planName &&
            plan.planType == rechargePlan.planType &&
            plan.planPrice == rechargePlan.planPrice &&
            plan.planOffers==rechargePlan.planOffers &&
            plan.planValidity==rechargePlan.planValidity&&
            plan.planDescription == rechargePlan.planDescription);

        if (existingPlan != null)
        {
             return BadRequest(new { Message = "Plan already exists." });
        }

        _dbContext.Prepaid.Add(rechargePlan);
        _dbContext.SaveChanges();

        return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.planId }, new { Message = "Plan successfully added.", Addon = rechargePlan });
    }
    
    [HttpPut("api/rechargeplan")]
public ActionResult<Prepaid> UpdateRechargePlan(Prepaid updatedPlan)
{
    var existingPlan = _dbContext.Prepaid.FirstOrDefault(plan => plan.planId == updatedPlan.planId);

    if (existingPlan == null)
    {
        return NotFound("Plan not found.");
    }

    // Check if a plan with the updated details already exists
    var duplicatePlan = _dbContext.Prepaid.FirstOrDefault(plan =>
        plan.planName == updatedPlan.planName &&
        plan.planType == updatedPlan.planType &&
        plan.planPrice == updatedPlan.planPrice &&
        plan.planOffers==updatedPlan.planOffers &&
        plan.planValidity==updatedPlan.planValidity&&
        plan.planDescription == updatedPlan.planDescription &&
        plan.planId != updatedPlan.planId);

    if (duplicatePlan != null)
    {
         return BadRequest(new { Message = "Plan already exists." });
    }

    existingPlan.planName = updatedPlan.planName;
    existingPlan.planType = updatedPlan.planType;
    existingPlan.planPrice = updatedPlan.planPrice;
    existingPlan.planOffers = updatedPlan.planOffers;
    existingPlan.planValidity = updatedPlan.planValidity;
    existingPlan.planDescription = updatedPlan.planDescription;

    _dbContext.SaveChanges();

    return Ok(new { Message = "Plan updated successfully." });
}


    // PUT api/rechargeplan/{id}
    [HttpPut("api/rechargeplan/{id}")]
public ActionResult<Prepaid> UpdateRechargePlan(int id, Prepaid updatedPlan)
{
    var existingPlan = _dbContext.prepaid.FirstOrDefault(plan => plan.planId == id);

    if (existingPlan == null)
    {
        return NotFound("Plan not found.");
    }

    // Check if a plan with the updated details already exists
    var duplicatePlan = _dbContext.Prepaid.FirstOrDefault(plan =>
        plan.planName == updatedPlan.planName &&
        plan.planType == updatedPlan.planType &&
        plan.planPrice == updatedPlan.planPrice &&
        plan.planOffers==updatedPlan.planOffers &&
        plan.planValidity==updatedPlan.planValidity&&
        plan.planDescription == updatedPlan.planDescription &&
        plan.planId != id);

    if (duplicatePlan != null)
    {
        return BadRequest(new { Message = "Plan already exists." });
    }

    existingPlan.planName = updatedPlan.planName;
    existingPlan.planType = updatedPlan.planType;
    existingPlan.planPrice = updatedPlan.planPrice;
    existingPlan.planOffers = updatedPlan.planOffers;
    existingPlan.planValidity = updatedPlan.planValidity;
    existingPlan.planDescription = updatedPlan.planDescription;

    _dbContext.SaveChanges();

    return Ok(new { Message = "Plan updated successfully." });;
}

    // DELETE api/rechargeplan/{id}
    [HttpDelete("api/rechargeplan/{id}")]
    public ActionResult DeleteRechargePlan(int id)
    {
        var rechargePlan = _dbContext.Prepaid.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }
         var reviews = _dbContext.Review.Where(review => review.PlanId == id);
        _dbContext.Review.RemoveRange(reviews);
        _dbContext.Prepaid.Remove(rechargePlan);
        _dbContext.SaveChanges();

        return Ok(new { Message = "Addon and associated reviews deleted successfully."});
    }
     [HttpGet("api/rechargeplan/Prepaid")]
    public IActionResult GetPrepaidPlans()
    {
        var PrepaidPlans = _dbContext.Prepaid.Where(plan => plan.planType.ToLower() == "Prepaid").ToList();
        return Ok(PrepaidPlans);
    }
    [HttpGet("api/rechargeplan/Prepaid")]
    public IActionResult GetPrepaidPlans()
    {
        var PrepaidPlans = _dbContext.Prepaid.Where(plan => plan.planType.ToLower() == "Prepaid").ToList();
        return Ok(PrepaidPlans);
    }

}

}

