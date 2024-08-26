// Import necessary namespaces
using Product_Application;
using Product_Application.Entities;
using ProductAppCore;
using ProductAppCore.DTOs;
using ProductAppDAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductAppDAL.Implementations
{
    // Implements the IProductRepository interface, providing the data access logic for products
    public class ProductRespository : IProductRepository
    {
        // Protected field to hold the database context for interacting with the database
        protected readonly Product_Application.AppContext _appContext;

        // Constructor that receives the database context via dependency injection
        public ProductRespository(Product_Application.AppContext appContext)
        {
            _appContext = appContext;
        }

        // Retrieves a list of products based on the provided filter model
        public List<ProductDTO> GetProducts(ProductFilterModel filterModel)
        {
            // Retrieve all products from the database
            List<Product> products = _appContext.Product.ToList();

            // Apply filtering based on the search string if provided
            if (!string.IsNullOrEmpty(filterModel.SearchString))
            {
                string filter = filterModel.SearchString.ToLower();
                products = products.Where(x => x.CustomerName.ToLower().Contains(filter) || x.ProductName.ToLower().Contains(filter)).ToList();
            }

            // Convert the Product entities to ProductDTOs
            List<ProductDTO> productDTOs = new List<ProductDTO>();

            foreach (Product product in products)
            {
                ProductDTO productDTO = new ProductDTO
                {
                    Id = product.Id,
                    Status = product.Status,
                    ProductName = product.ProductName,
                    CustomerName = product.CustomerName,
                    ProductCode = product.ProductCode,
                    Quantity = product.Quantity,
                    DeliveryDate = product.DeliveryDate
                };

                productDTOs.Add(productDTO);
            }

            return productDTOs;
        }

        // Adds a new product to the database
        public void AddProduct(ProductDTO productDTO)
        {
            // Create a new Product entity from the ProductDTO
            Product product = new Product
            {
                Status = productDTO.Status,
                ProductName = productDTO.ProductName,
                CustomerName = productDTO.CustomerName,
                ProductCode = productDTO.ProductCode,
                Quantity = productDTO.Quantity,
                DeliveryDate = productDTO.DeliveryDate
            };

            // Add the new product to the database and save changes
            _appContext.Product.Add(product);
            _appContext.SaveChanges();
        }

        // Updates an existing product in the database
        public ProductDTO UpdateProduct(ProductDTO productDto)
        {
            // Find the product in the database by its ID
            Product product = _appContext.Product.FirstOrDefault(x => x.Id == productDto.Id);

            // If the product does not exist, throw an exception
            if (product == null)
            {
                throw new ArgumentException("Product does not exist");
            }

            // Update the product properties
            product.Status = productDto.Status;
            product.ProductName = productDto.ProductName;
            product.CustomerName = productDto.CustomerName;
            product.ProductCode = productDto.ProductCode;
            product.Quantity = productDto.Quantity;
            product.DeliveryDate = productDto.DeliveryDate;

            // Save changes to the database
            _appContext.SaveChanges();

            return productDto;
        }

        // Deletes a product from the database by its ID
        public void DeleteProduct(int id)
        {
            // Find the product in the database by its ID
            Product product = _appContext.Product.FirstOrDefault(x => x.Id == id);

            // If the product does not exist, throw an exception
            if (product == null)
            {
                throw new ArgumentException("Product does not exist");
            }

            // Remove the product from the database and save changes
            _appContext.Product.Remove(product);
            _appContext.SaveChanges();
        }
    }
}
