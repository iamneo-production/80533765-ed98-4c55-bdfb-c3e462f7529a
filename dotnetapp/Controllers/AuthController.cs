using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Context;


namespace dotnetapp.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly PostPaidDbContext _authContext;
        public AuthController(PostPaidDbContext appDbContext)
        {
            _authContext = appDbContext;
        }
        [HttpGet("api/user/{email}")]
    public async Task<IActionResult> GetUserByEmail(string email)
    {
        var user = await _authContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user == null)
        {
            return NotFound(new { Message = "User not found." });
        }

        return Ok(new { Message = "User details fetched successfully.", User = user });
    }

        [HttpPost("admin/login")]
        public async Task<IActionResult> Authenticate([FromBody] Login loginObj)
        {
            if (loginObj == null)
                return BadRequest();

            var login = await _authContext.Logins
                .FirstOrDefaultAsync(x => x.Email == loginObj.Email && x.Password == loginObj.Password);

            if (login == null)
                return Created("201",new { Message = "Invalid credentials." });

            if (await _authContext.Admins.AnyAsync(x => x.Email == loginObj.Email))
            {
                 return Created("201", new { Message = "Admin login success!",success=true, Email = loginObj.Email});
            }
            else if (await _authContext.Users.AnyAsync(x => x.Email == loginObj.Email))
            {
                return Created("201",new { Message = "User login success!" ,success=true,Email = loginObj.Email});
            }

            return Created("201",new { Message = "Role not found for the specified email." });
        }

        [HttpPost("/user/signup")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            if (userObj == null)
                return BadRequest();

            // Check if the email already exists in either Users or Admins table
            var emailExists = await _authContext.Users.AnyAsync(x => x.Email == userObj.Email) ||
                              await _authContext.Admins.AnyAsync(x => x.Email == userObj.Email);
            if (emailExists)
                return Created("201",new { Message = "Email already exists."  });

            if (userObj.Role == "admin")
            {
                var admin = new Admin
                {
                    Role = userObj.Role,
                    Email = userObj.Email,
                    Username = userObj.Username,
                    MobileNumber = userObj.MobileNumber,
                    Password = userObj.Password
                };

                await _authContext.Admins.AddAsync(admin);

                var login = new Login
                {
                    Email = userObj.Email,
                    Password = userObj.Password
                };

                await _authContext.Logins.AddAsync(login);
            }
            else if (userObj.Role == "user")
            {
                var user = new User
                {
                    Role = userObj.Role,
                    Email = userObj.Email,
                    Username = userObj.Username,
                    MobileNumber = userObj.MobileNumber,
                    Password = userObj.Password
                };

                await _authContext.Users.AddAsync(user);

                var login = new Login
                {
                    Email = userObj.Email,
                    Password = userObj.Password
                };

                await _authContext.Logins.AddAsync(login);
            }
            else
            {
                return Created("201",new { Message = "Invalid role specified."  });
            }

            await _authContext.SaveChangesAsync();
            return Created("201",new { Message = "Registration Success!",success=true });
        }
    }
}