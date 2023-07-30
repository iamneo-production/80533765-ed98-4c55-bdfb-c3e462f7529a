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
        private readonly PostPaidDbContext _dbContext;
        public PlansController(PostPaidDbContext dbContext)
        {
            _dbContext = dbContext;
        }

         // GET api/rechargeplan
    [HttpGet("admin/getAllPlan")]
    public ActionResult<IEnumerable<PostPaid>> GetAllRechargePlans()
    {
        var postPlans = _dbContext.PostPaid.ToList();
        return Ok(postPlans);
    }

    // GET api/rechargeplan/{id}
    [HttpGet("api/plans/{id}")]
    public ActionResult<PostPaid> GetRechargePlanById(int id)
    {
        var rechargePlan = _dbContext.PostPaid.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }

        return Ok(rechargePlan);
    }

    // POST api/rechargeplan
    [HttpPost("api/rechargeplan")]
    public ActionResult<PostPaid> CreateRechargePlan(PostPaid rechargePlan)
    {
        // Check if a plan with the same details already exists
        var existingPlan = _dbContext.PostPaid.FirstOrDefault(plan =>
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

        _dbContext.PostPaid.Add(rechargePlan);
        _dbContext.SaveChanges();

        return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.planId }, new { Message = "Plan successfully added.", Addon = rechargePlan });
    }
    
    [HttpPut("api/rechargeplan")]
public ActionResult<PostPaid> UpdateRechargePlan(PostPaid updatedPlan)
{
    var existingPlan = _dbContext.PostPaid.FirstOrDefault(plan => plan.planId == updatedPlan.planId);

    if (existingPlan == null)
    {
        return NotFound("Plan not found.");
    }

    // Check if a plan with the updated details already exists
    var duplicatePlan = _dbContext.PostPaid.FirstOrDefault(plan =>
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
public ActionResult<PostPaid> UpdateRechargePlanById(int id, PostPaid updatedPlan)
{
    var existingPlan = _dbContext.PostPaid.FirstOrDefault(plan => plan.planId == id);

    if (existingPlan == null)
    {
        return NotFound("Plan not found.");
    }

    // Check if a plan with the updated details already exists
    var duplicatePlan = _dbContext.PostPaid.FirstOrDefault(plan =>
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
    public ActionResult DeleteRechargePlanById(int id)
    {
        var rechargePlan = _dbContext.PostPaid.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }
         var reviews = _dbContext.Review.Where(review => review.PlanId == id);
        _dbContext.Review.RemoveRange(reviews);
        _dbContext.PostPaid.Remove(rechargePlan);
        _dbContext.SaveChanges();

        return Ok(new { Message = "Plans and associated reviews deleted successfully."});
    }
     [HttpGet("api/rechargeplan/prepaid")]
    public IActionResult GetPrepaidPlans()
    {
        var prepaidPlans = _dbContext.PostPaid.Where(plan => plan.planType.ToLower() == "prepaid").ToList();
        return Ok(prepaidPlans);
    }
    [HttpGet("api/rechargeplan/postpaid")]
    public IActionResult GetPostpaidPlans()
    {
        var postpaidPlans = _dbContext.PostPaid.Where(plan => plan.planType.ToLower() == "postpaid").ToList();
        return Ok(postpaidPlans);
    }

}

}

