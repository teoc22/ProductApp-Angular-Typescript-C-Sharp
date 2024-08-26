// Define the namespace for the entities used in the Product_Application project
namespace Product_Application.Entities
{
    // Represents a User entity in the database
    public class User
    {
        // Property to store the unique identifier of the user
        public int Id { get; set; }

        // Property to store the username of the user
        public string Username { get; set; }

        // Property to store the password of the user
        public string Password { get; set; }
    }
}
