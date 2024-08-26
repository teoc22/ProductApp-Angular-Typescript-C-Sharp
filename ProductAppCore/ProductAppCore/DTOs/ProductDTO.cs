// Import necessary namespaces
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppCore.DTOs
{
    // Represents a Data Transfer Object (DTO) for products
    public class ProductDTO
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

        // Property to store the quantity of the product
        public int Quantity { get; set; }

        // Property to store the delivery date of the product
        public DateTime DeliveryDate { get; set; }
    }
}
