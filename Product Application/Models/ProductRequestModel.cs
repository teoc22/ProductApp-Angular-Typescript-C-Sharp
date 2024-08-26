// Define the namespace for the models used in the Product_Application project
namespace Product_Application.Models
{
    // Represents a model for handling product-related requests, specifically for filtering or searching products
    public class ProductRequestModel
    {
        // Property to store the search string used to filter products based on their name, code, or other attributes
        // The '?' indicates that the string is nullable, meaning it can be null or have no value
        public string? SearchString { get; set; }
    }
}