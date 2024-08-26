// Define the namespace for the models used in the Product_Application project
namespace Product_Application.Models
{
    // Represents a model for a product, containing various properties related to a product's details
    public class ProductModel
    {
        // Property to store the product ID (nullable to allow for cases where the ID is not yet assigned)
        public int? Id { get; set; }

        // Property to store the status of the product (e.g., "In Stock", "Out of Stock")
        public string Status { get; set; }

        // Property to store the product code, which is typically a unique identifier or SKU
        public string ProductCode { get; set; }

        // Property to store the name of the product
        public string ProductName { get; set; }

        // Property to store the name of the customer associated with the product (if applicable)
        public string CustomerName { get; set; }

        // Property to store the quantity of the product
        public int Quantity { get; set; }

        // Property to store the delivery date of the product
        public DateTime DeliveryDate { get; set; }

        // Default constructor
        public ProductModel()
        {
            // Initialize the properties with default values if needed
        }

        // Constructor that allows setting all properties during instantiation
        public ProductModel(int id, string status, string productCode, string productName, string customerName, int quantity, DateTime deliveryDate)
        {
            Id = id;
            Status = status;
            ProductCode = productCode;
            ProductName = productName;
            CustomerName = customerName;
            Quantity = quantity;
            DeliveryDate = deliveryDate;
        }
    }
}
