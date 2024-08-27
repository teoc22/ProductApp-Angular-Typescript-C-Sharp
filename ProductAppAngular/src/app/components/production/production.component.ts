// Import necessary modules, components, and models
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductionService } from '../../services/production.service';
import { Product, ProductRequestModel } from '../../models/product.model';
import { ModalConfig, ModalStatus } from '../../shared/modal/modal.model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProductionDeleteModalComponent } from '../production-delete-modal/production-delete-modal.component';
import { ProductionEditModalComponent } from '../production-edit-modal/production-edit-modal.component';

@Component({
  selector: 'app-production', // Defines the selector for the component
  templateUrl: './production.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./production.component.scss'] // Specifies the path to the component's styles
})
export class ProductionComponent implements OnInit {

  // ViewChild to reference modal components in the template
  @ViewChild('addProductModal') addProductModalRef!: ModalComponent;
  @ViewChild('editProductModal') editProductModalRef!: ModalComponent;
  @ViewChild('deleteProductModal') deleteProductModalRef!: ModalComponent;

  // ViewChild to reference custom modal components for edit and delete functionality
  @ViewChild(ProductionEditModalComponent) editModalCompRef!: ProductionEditModalComponent;
  @ViewChild(ProductionDeleteModalComponent) deleteModalCompRef!: ProductionDeleteModalComponent;

  // Property to hold the currently selected product
  protected selectedRow!: Product;

  // Property to store the current search string
  public searchString: string = '';

  // Data source for the Angular Material table
  public dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  // Columns to be displayed in the Angular Material table
  public displayedColumns: string[] = ['id', 'status', 'productCode', 'productName', 'customerName', 'quantity', 'deliveryDate'];

  // Inject the ProductionService to handle API calls
  constructor(private productionService: ProductionService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.getProducts(); // Fetch products when the component is initialized
  }

  // Method to handle row selection in the table
  selectRow(row: Product) {
    this.selectedRow = row; // Set the selectedRow to the clicked row
    console.log('selectedRow', row);
  }

  // Method to refresh the table data by re-fetching the products
  refreshTable(products: any) {
    this.getProducts();
  }

  // Private method to fetch products from the API
  private getProducts() {
    let filterModel: ProductRequestModel = {}; // Initialize an empty filter model

    this.productionService.getProducts(filterModel).subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource = res; // Set the data source for the table
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  // Method to open the "Add Product" modal
  protected openAddModal() {
    this.addProductModalRef.open();
  }

  // Method to open the "Edit Product" modal and initialize it with the selected row
  protected openEditModal() {
    this.editModalCompRef.initSelectedRow(this.selectedRow!);
    this.editProductModalRef.open();
  }

  // Method to open the "Delete Product" modal and initialize it with the selected row's ID
  protected openDeleteModal() {
    this.deleteModalCompRef.initSelectedRow(this.selectedRow.id!);
    this.deleteProductModalRef.open();
  }

  // Configuration for the "Add Product" modal
  protected addModalConfig: ModalConfig = {
    title: 'Add Product',
    onSubmit: () => {console.log("Submitted")}, // Placeholder submit action
    type: ModalStatus.Default,
  }
  
  // Configuration for the "Edit Product" modal
  protected editModalConfig: ModalConfig = {
    title: 'Edit Product',
    type: ModalStatus.Default,
  }
  
  // Configuration for the "Delete Product" modal
  protected deleteModalConfig: ModalConfig = {
    title: 'Delete Product',
    type: ModalStatus.Error, // Setting modal type to error to emphasize the delete action
  }  

  // Method to search products based on the current search string
  public searchProduct() {
    let searchModel: ProductRequestModel = {
      searchString: this.searchString // Set the search string in the request model
    };

    this.productionService.getProducts(searchModel).subscribe({
      next: (res: any) => {
        this.dataSource = res; // Update the data source with the search results
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
