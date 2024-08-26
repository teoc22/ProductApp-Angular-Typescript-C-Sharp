// Import necessary namespaces
using ProductAppBL.Interfaces; // Interface for the ProductService
using ProductAppCore; // Core models and utilities
using ProductAppCore.DTOs; // Data Transfer Objects used for product operations
using ProductAppDAL.Interfaces; // Interface for the ProductRepository
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppBL.Implementations
{
    // Implements the IProductService interface, providing the business logic for product operations
    public class ProductService : IProductService
    {
        // Private field to hold the instance of IProductRepository for interacting with the data layer
        private readonly IProductRepository _productRepository;

        // Constructor that receives the product repository via dependency injection
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        // Retrieves a list of products based on the provided filter model
        public List<ProductDTO> GetProducts(ProductFilterModel filterModel)
        {
            // Delegate the data retrieval to the repository
            return _productRepository.GetProducts(filterModel);
        }

        // Adds a new product using the data provided in the ProductDTO
        public void AddProduct(ProductDTO productDTO)
        {
            // Delegate the addition of the product to the repository
            _productRepository.AddProduct(productDTO);
        }

        // Updates an existing product using the data provided in the ProductDTO
        public ProductDTO UpdateProduct(ProductDTO productDto)
        {
            // Delegate the product update to the repository
            return _productRepository.UpdateProduct(productDto);
        }

        // Deletes a product by its ID
        public void DeleteProduct(int id)
        {
            // Delegate the product deletion to the repository
            _productRepository.DeleteProduct(id);
        }
    }
}
