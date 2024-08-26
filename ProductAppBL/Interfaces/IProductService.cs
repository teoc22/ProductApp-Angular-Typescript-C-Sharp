// Import necessary namespaces
using ProductAppCore; // Core models and utilities
using ProductAppCore.DTOs; // Data Transfer Objects used for product operations
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppBL.Interfaces
{
    // Define an interface for product-related business logic
    public interface IProductService
    {
        // Method to retrieve a list of products based on the provided filter model
        public List<ProductDTO> GetProducts(ProductFilterModel filterModel);

        // Method to add a new product using the provided ProductDTO
        public void AddProduct(ProductDTO productDTO);

        // Method to update an existing product using the provided ProductDTO
        public ProductDTO UpdateProduct(ProductDTO productDto);

        // Method to delete a product by its ID
        public void DeleteProduct(int id);
    }
}
