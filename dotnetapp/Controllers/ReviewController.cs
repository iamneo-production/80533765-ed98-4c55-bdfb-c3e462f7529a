using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Context;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly PostPaidDbContext _dbContext;

        public ReviewController(PostPaidDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet("api/reviews/plan/{planId}/average-rating")]
        public ActionResult<int> GetAverageRatingByPlanId(int planId)
        {
            var reviews = _dbContext.Review.Where(r => r.PlanId == planId).ToList();
            if (reviews.Count == 0)
            {
                return Ok(0);
            }

            double averageRating = reviews.Average(r => r.Rating);
            int roundedRating = (int)Math.Round(averageRating);

            return Ok(roundedRating);
            }

    [HttpGet("api/reviews/addon/{addonId}/average-rating")]
    public ActionResult<int> GetAddonAverageRating(int addonId)
    {
        var reviews = _dbContext.Review.Where(r => r.AddonId == addonId).ToList();
        if (reviews.Count == 0)
        {
            return Ok(0);
        }

        double averageRating = reviews.Average(r => r.Rating);
        int roundedRating = (int)Math.Round(averageRating);

        return Ok(roundedRating);
    }
    [HttpGet("user/getReview")]
    public ActionResult<IEnumerable<Review>> GetAllReviews()
    {
        var postPlans = _dbContext.Review.ToList();
        return Ok(postPlans);
    }

        [HttpGet("api/reviews/{id}")]
        public ActionResult<Review> GetReviewById(int id)
        {
            var review = _dbContext.Review.Find(id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }
        // GET api/reviews/plan/{planId}
        [HttpGet("api/reviews/plan/{planId}")]
        public ActionResult<IEnumerable<Review>> GetReviewsByPlanId(int planId)
        {
            var reviews = _dbContext.Review.Where(r => r.PlanId == planId).ToList();
            return Ok(reviews);
        }

        // GET api/reviews/addon/{addonId}
        [HttpGet("api/reviews/addon/{addonId}")]
        public ActionResult<IEnumerable<Review>> GetReviewsByAddonId(int addonId)
        {
            var reviews = _dbContext.Review.Where(r => r.AddonId == addonId).ToList();
            return Ok(reviews);
        }

        // POST api/reviews/plan/{planId}
        [HttpPost("api/reviews/plan/{planId}")]
        public ActionResult<Review> AddPlanReview(int planId, Review review)
        {
            review.PlanId = planId;
            _dbContext.Review.Add(review);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetReviewById), new { id = review.Id }, review);
        }

        // POST api/reviews/addon/{addonId}
        [HttpPost("api/reviews/addon/{addonId}")]
        public ActionResult<Review> AddAddonReview(int addonId, Review review)
        {
            review.AddonId = addonId;
            _dbContext.Review.Add(review);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetReviewById), new { id = review.Id }, review);
        }

        // PUT api/reviews/{id}
        [HttpPut("api/reviews/{id}")]
        public IActionResult UpdateReview(int id, Review updatedReview)
        {
            var existingReview = _dbContext.Review.Find(id);
            if (existingReview == null)
            {
                return NotFound();
            }

            existingReview.Rating = updatedReview.Rating;
            existingReview.Comment = updatedReview.Comment;

            _dbContext.SaveChanges();
            return NoContent();
        }

        // DELETE api/reviews/{id}
        [HttpDelete("api/reviews/{id}")]
        public IActionResult DeleteReview(int id)
        {
            var existingReview = _dbContext.Review.Find(id);
            if (existingReview == null)
            {
                return NotFound();
            }

            _dbContext.Review.Remove(existingReview);
            _dbContext.SaveChanges();
            return NoContent();
        }
        [HttpDelete("api/reviews/plan/{planId}")]
        public IActionResult DeleteReviewsByPlan(int planId)
        {
            var reviews = _dbContext.Review.Where(review => review.PlanId == planId);
            _dbContext.Review.RemoveRange(reviews);
            _dbContext.SaveChanges();

            return NoContent();
        }
        [HttpDelete("api/reviews/addon/{addonId}")]
        public IActionResult DeleteReviewsByAddon(int addonId)
        {
            var reviews = _dbContext.Review.Where(review => review.AddonId == addonId);
            _dbContext.Review.RemoveRange(reviews);
            _dbContext.SaveChanges();

            return NoContent();
        }
    }
}