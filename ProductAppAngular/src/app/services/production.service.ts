// Import necessary modules and models from Angular and the application
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductRequestModel } from '../models/product.model';

@Injectable({
  providedIn: 'root' // Provides this service at the root level, making it a singleton service available throughout the application
})
export class ProductionService {

  // Base URL for the products controller on the backend
  private controllerUrl: string = "https://localhost:7105/api/Products/";

  // Constructor to inject the HttpClient for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to retrieve a list of products based on a filter model
  public getProducts(filterModel: ProductRequestModel) {
    // Sends a POST request to the 'GetProducts' endpoint with the filter model
    return this.http.post(this.controllerUrl + 'GetProducts', filterModel);
  }

  // Method to retrieve a specific product by its ID
  public getProductById(id: number) {
    // Sends a GET request to the 'GetProductById' endpoint with the product ID as a query parameter
    return this.http.get(this.controllerUrl + 'GetProductById?id=' + id);
  }

  // Method to add a new product
  public addProduct(product: Product) {
    // Sends a POST request to the 'AddProduct' endpoint with the product data
    return this.http.post(this.controllerUrl + 'AddProduct', product);
  }

  // Method to update an existing product
  public updateProduct(product: Product) {
    // Sends a POST request to the 'UpdateProduct' endpoint with the updated product data
    return this.http.post(this.controllerUrl + 'UpdateProduct', product);
  }
    
  // Method to delete a product by its ID
  public deleteProduct(id: number) {
    // Sends a DELETE request to the 'DeleteProduct' endpoint with the product ID as a query parameter
    return this.http.delete(this.controllerUrl + 'DeleteProduct?id=' + id);
  } 
}  
