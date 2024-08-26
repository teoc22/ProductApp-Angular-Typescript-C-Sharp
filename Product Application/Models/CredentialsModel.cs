// Define the namespace for the models used in the Product_Application project
namespace Product_Application.Models
{
    // Represents a model for user credentials, containing a username and password
    public class CredentialsModel
    {
        // Property to store the username
        public string Username { get; set; }

        // Property to store the password
        public string Password { get; set; }

        // Default constructor
        public CredentialsModel()
        {
            // Initialize the properties with default values if needed
        }

        // Constructor that allows setting the username and password during instantiation
        public CredentialsModel(string username, string password)
        {
            Username = username;
            Password = password;
        }
    }

    // Inherits from CredentialsModel and adds a property for updating the password
    public class UpdateCredentialsModel : CredentialsModel
    {
        // Property to store the new password for updating the user credentials
        public string? NewPassword { get; set; }
    }

    // The following code is commented out. It represents an alternative model for updating passwords,
    // including fields for new password and confirmation of the new password.
    /*
    public class CredentialsModelUpdatePasword
    {
        // Property to store the username
        public string Username { get; set; }

        // Property to store the new password
        public string NewPassword { get; set; }

        // Property to confirm the new password
        public string ConfirmNewPassword { get; set; }

        // Default constructor
        public CredentialsModelUpdatePasword()
        {
            // Initialize the properties with default values if needed
        }

        // Constructor that allows setting the username, new password, and confirm new password during instantiation
        public CredentialsModelUpdatePasword(string username, string newPassword, string confirmNewPassword)
        {
            Username = username;
            NewPassword = newPassword;
            ConfirmNewPassword = confirmNewPassword;
        }
    }
    */
}
