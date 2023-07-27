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
    public class AddonsController : ControllerBase
    {
        private readonly PostPaidDbContext _dbContext;
        public AddonsController(PostPaidDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    [HttpGet("admin/getAddon")]
<<<<<<< HEAD
    public ActionResult<IEnumerable<Addons>> GetAllRechargePlans()
=======
    public ActionResult<IEnumerable<Addons>> GetAllAddonPlans()
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var postPlans = _dbContext.Addons.ToList();
        return Ok(postPlans);
    }

    // GET api/rechargeplan/{id}
    [HttpGet("api/Addons/{id}")]
<<<<<<< HEAD
    public ActionResult<Addons> GetRechargePlanById(int id)
=======
    public ActionResult<Addons> GetAddonsById(int id)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var rechargePlan = _dbContext.Addons.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }

        return Ok(rechargePlan);
    }

    // POST api/rechargeplan
    [HttpPost("api/Addons")]
<<<<<<< HEAD
    public ActionResult<Addons> CreateRechargePlan(Addons rechargePlan)
=======
    public ActionResult<Addons> CreateAddonPlan(Addons rechargePlan)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        // Check if an addon with the same details already exists
        var existingAddon = _dbContext.Addons.FirstOrDefault(addon =>
            addon.addonName == rechargePlan.addonName &&
            addon.addonPrice == rechargePlan.addonPrice &&
            addon.addonDetails == rechargePlan.addonDetails);

        if (existingAddon != null)
        {
            return BadRequest(new { Message = "Addon with the same details already exists."});
        }

        _dbContext.Addons.Add(rechargePlan);
        _dbContext.SaveChanges();
<<<<<<< HEAD
         return CreatedAtAction(nameof(GetRechargePlanById), new { id = rechargePlan.addonId }, new { Message = "Addon successfully added.", Addon = rechargePlan });
=======
         return CreatedAtAction(nameof(GetAddonsById), new { id = rechargePlan.addonId }, new { Message = "Addon successfully added.", Addon = rechargePlan });
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    }


    [HttpPut("api/Addons")]
<<<<<<< HEAD
    public ActionResult<Addons> UpdateRechargePlan(Addons updatedPlan)
=======
    public ActionResult<Addons> UpdateAddonPlan(Addons updatedPlan)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var existingPlan = _dbContext.Addons.Find(updatedPlan.addonId);

        if (existingPlan == null)
        {
            return NotFound();
        }

        // Check if an addon with the same details already exists (excluding the current addon)
        var existingAddon = _dbContext.Addons.FirstOrDefault(addon =>
            addon.addonId != updatedPlan.addonId &&
            addon.addonName == updatedPlan.addonName &&
            addon.addonPrice == updatedPlan.addonPrice &&
            addon.addonDetails == updatedPlan.addonDetails);

        if (existingAddon != null)
        {
            return BadRequest(new { Message = "Addon with the same details already exists."});
        }

        existingPlan.addonName = updatedPlan.addonName;
        existingPlan.addonPrice = updatedPlan.addonPrice;
        existingPlan.addonDetails = updatedPlan.addonDetails;
        // Update other properties as needed

        _dbContext.SaveChanges();

         return Ok(new { Message = "Addon Updated Successfully."});
    }
    // PUT api/rechargeplan/{id}
    [HttpPut("api/Addons/{id}")]
<<<<<<< HEAD
    public ActionResult<Addons> UpdateRechargePlan(int id, Addons updatedPlan)
=======
    public ActionResult<Addons> UpdateAddonPlan(int id, Addons updatedPlan)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var existingPlan = _dbContext.Addons.Find(id);

        if (existingPlan == null)
        {
            return NotFound();
        }

        // Check if an addon with the same details already exists (excluding the current addon)
        var existingAddon = _dbContext.Addons.FirstOrDefault(addon =>
            addon.addonId != id &&
            addon.addonName == updatedPlan.addonName &&
            addon.addonPrice == updatedPlan.addonPrice &&
            addon.addonDetails == updatedPlan.addonDetails);

        if (existingAddon != null)
        {
           return BadRequest(new { Message = "Addon with the same details already exists."});
        }

        existingPlan.addonName = updatedPlan.addonName;
        existingPlan.addonPrice = updatedPlan.addonPrice;
        existingPlan.addonDetails = updatedPlan.addonDetails;
        // Update other properties as needed

        _dbContext.SaveChanges();

        return Ok(new { Message = "Addon Updated Successfully."});
    }
    // DELETE api/rechargeplan/{id}
    [HttpDelete("api/Addons/{id}")]
<<<<<<< HEAD
    public ActionResult DeleteRechargePlan(int id)
=======
    public ActionResult DeleteAddonPlan(int id)
>>>>>>> 7edfd09cbdb5b4822db1c078ebd6a6a80a100ef3
    {
        var rechargePlan = _dbContext.Addons.Find(id);

        if (rechargePlan == null)
        {
            return NotFound();
        }
        var reviews = _dbContext.Review.Where(review => review.AddonId == id);
        _dbContext.Review.RemoveRange(reviews);
        _dbContext.Addons.Remove(rechargePlan);
        _dbContext.SaveChanges();

        return Ok(new { Message = "Addon and associated reviews deleted successfully."});
    }
    }
}