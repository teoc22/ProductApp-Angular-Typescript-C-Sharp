// Import necessary namespaces for ASP.NET Core functionality and other application-specific modules
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Product_Application.Models;
using ProductAppBL.Interfaces;
using ProductAppCore;
using ProductAppCore.DTOs;
using ProductAppDAL.Implementations;
using ProductAppDAL.Interfaces;
using System.Collections.Generic;

namespace Product_Application.Controllers
{
    // Define the route for this controller, which will be api/Products/[action]
    [Route("api/[controller]/[action]")]
    [ApiController] // Indicates that this is an API controller and enables API-specific behaviors
    public class ProductsController : ControllerBase
    {
        // Private field to hold the product service instance
        private readonly IProductService _productService;

        // Constructor that receives the product service via dependency injection
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        // POST: api/Products/GetProducts
        // Retrieves a list of products based on the provided filter model
        [HttpPost(Name = "GetProducts")]
        public List<ProductDTO> GetProducts(ProductRequestModel model)
        {
            // Convert the request model to a filter model that the service layer can understand
            ProductFilterModel filterModel = new ProductFilterModel
            {
                SearchString = model.SearchString // Set the search string filter
            };

            // Use the product service to retrieve the list of products that match the filter
            return _productService.GetProducts(filterModel);
        }

        // The following commented-out code would retrieve a product by its ID
        /*
        [HttpGet(Name = "GetProductById")]
        public ProductModel GetProductById(int id)
        {
            // Find and return the product that matches the given ID
            ProductModel productModel = productList.Find(x => x.Id == id);
            return productModel;
        }
        */

        // POST: api/Products/AddProduct
        // Adds a new product to the system
        [HttpPost(Name = "AddProduct")]
        public IActionResult AddProduct([FromBody] ProductDTO productModel)
        {
            // Use the product service to add the product
            _productService.AddProduct(productModel);

            // Return a 200 OK response
            return Ok();
        }

        // POST: api/Products/UpdateProduct
        // Updates an existing product in the system
        [HttpPost(Name = "UpdateProduct")]
        public ProductDTO UpdateProduct([FromBody] ProductDTO productModel)
        {
            // Use the product service to update the product and return the updated product
            return _productService.UpdateProduct(productModel);
        }

        // DELETE: api/Products/DeleteProduct
        // Deletes a product from the system by its ID
        [HttpDelete(Name = "DeleteProduct")]
        public IActionResult DeleteProduct(int id)
        {
            // Use the product service to delete the product
            _productService.DeleteProduct(id);

            // Return a 200 OK response
            return Ok();
        }
    }
}
