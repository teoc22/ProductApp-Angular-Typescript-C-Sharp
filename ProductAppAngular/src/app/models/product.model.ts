// Interface to represent the structure of a Product object
export interface Product {

  id?: number; // Optional: Unique identifier for the product
  status: string; // The status of the product (e.g., "In Stock", "Out of Stock")
  productCode: string; // A unique code representing the product
  productName: string; // The name of the product
  customerName: string; // The name of the customer associated with the product
  quantity: number; // The quantity of the product available or ordered
  deliveryDate: Date; // The date when the product is expected to be delivered
}

// Interface to represent the structure of a product request, typically used for filtering or searching products
export interface ProductRequestModel {

  searchString?: string; // Optional: A search string used to filter products by name, code, customer, etc.
}
