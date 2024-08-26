// Define the namespace for the entities used in the Product_Application project
namespace Product_Application.Entities
{
    // Represents a Product entity in the database
    public class Product
    {
        // Property to store the unique identifier of the product (nullable)
        public int? Id { get; set; }

        // Property to store the status of the product (e.g., "Available", "Out of Stock")
        public string Status { get; set; }

        // Property to store the product code, which is typically a unique identifier or SKU
        public string ProductCode { get; set; }

        // Property to store the name of the product
        public string ProductName { get; set; }

        // Property to store the name of the customer associated with the product, if applicable
        public string CustomerName { get; set; }

        // Property to store the quantity of the product available or ordered
        public int Quantity { get; set; }

        // Property to store the delivery date of the product
        public DateTime DeliveryDate { get; set; }
    }
}
