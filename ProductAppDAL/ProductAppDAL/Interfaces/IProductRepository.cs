// Import necessary namespaces
using ProductAppCore; // Core models and utilities, such as ProductFilterModel
using ProductAppCore.DTOs; // Data Transfer Objects used for product operations
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppDAL.Interfaces
{
    // Define an interface for product-related data access logic
    public interface IProductRepository
    {
        // Method to retrieve a list of products based on the provided filter model
        List<ProductDTO> GetProducts(ProductFilterModel filterModel);

        // Method to add a new product using the provided ProductDTO
        void AddProduct(ProductDTO productDTO);

        // Method to update an existing product using the provided ProductDTO
        ProductDTO UpdateProduct(ProductDTO productDto);

        // Method to delete a product by its ID
        void DeleteProduct(int id);
    }
}
