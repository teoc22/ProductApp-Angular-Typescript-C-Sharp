// Import necessary namespaces for ASP.NET Core functionality
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Product_Application.Entities;
using Product_Application.Models;

namespace Product_Application.Controllers
{
    // Define the route for this controller, which will be api/Authentication/[action]
    [Route("api/[controller]/[action]")]
    [ApiController] // Indicates that this is an API controller and enables API-specific behaviors
    public class AuthenticationController : ControllerBase
    {
        // Private field to hold the application's database context
        private AppContext _appContext;

        // Constructor that receives the application's database context via dependency injection
        public AuthenticationController(AppContext appContext)
        {
            _appContext = appContext;
        }

        // POST: api/Authentication/Register
        // Registers a new user by creating a User object and saving it to the database
        [HttpPost(Name = "Register")]
        public ActionResult Register(CredentialsModel credentials)
        {
            try
            {
                // Create a new User entity and populate it with the provided credentials
                User user = new User();
                user.Username = credentials.Username;
                user.Password = credentials.Password;

                // Check if a user with the same username already exists in the database
                User existingUser = _appContext.Users.FirstOrDefault(x => x.Username == credentials.Username);

                // If the user exists, throw an exception
                if (existingUser != null)
                {
                    throw new ArgumentException("Username already exists!");
                }

                // Add the new user to the database and save changes
                _appContext.Users.Add(user);
                _appContext.SaveChanges();
            }
            catch (Exception e)
            {
                // If an exception occurs, return a 500 Internal Server Error response with the exception message
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            // If registration is successful, return a 200 OK response with a success message
            return Ok(new
            {
                Message = "Register Successful. You can login using the credentials."
            });
        }

        // POST: api/Authentication/UpdatePassword
        // Updates the password for an existing user
        [HttpPost(Name = "UpdatePassword")]
        public ActionResult UpdatePassword(UpdateCredentialsModel credentialsModel)
        {
            try
            {
                // Find the user in the database by username
                User user = _appContext.Users.FirstOrDefault(x => x.Username == credentialsModel.Username);

                // If the user does not exist, throw an exception
                if (user == null)
                {
                    throw new ArgumentException("Cannot find user!");
                }

                // Update the user's password and save changes to the database
                user.Password = credentialsModel.Password;
                _appContext.SaveChanges();
            }
            catch (Exception e)
            {
                // If an exception occurs, return a 500 Internal Server Error response with the exception message
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            // If the password update is successful, return a 200 OK response with a success message
            return Ok(new
            {
                Message = "Password was successfully changed! You can log in now."
            });
        }

        // POST: api/Authentication/Login
        // Authenticates a user by checking their username and password
        [HttpPost(Name = "Login")]
        public ActionResult Login(UpdateCredentialsModel credentialsModel)
        {
            try
            {
                // Find the user in the database by username
                User user = _appContext.Users.FirstOrDefault(x => x.Username == credentialsModel.Username);

                // If the user does not exist or the password is incorrect, throw an exception
                if (user == null || user.Password != credentialsModel.Password)
                {
                    throw new ArgumentException("You have entered an invalid username or password.");
                }
            }
            catch (Exception e)
            {
                // If an exception occurs, return a 500 Internal Server Error response with the exception message
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }

            // If authentication is successful, return a 200 OK response
            return Ok();
        }
    }
}
