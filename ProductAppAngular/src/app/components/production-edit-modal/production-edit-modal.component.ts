// Import necessary modules and services from Angular and the application
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProductionService } from '../../services/production.service';

@Component({
  selector: 'app-production-edit-modal', // Defines the selector for the component
  templateUrl: './production-edit-modal.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./production-edit-modal.component.scss'] // Specifies the path to the component's styles
})
export class ProductionEditModalComponent implements OnInit, OnDestroy {

  // Input property to receive the modal component instance
  @Input() modalComp!: ModalComponent;

  // Output event emitter to notify parent component when a product is successfully updated
  @Output() productUpdate: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  // Form group for the edit product form
  protected editProductForm!: FormGroup;

  // Property to store the currently selected product for editing
  selectedRow!: Product;

  // Constructor to inject the ProductionService for API calls
  constructor(private productionService: ProductionService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.initForm(); // Initialize the form
    this.setButtons(); // Set up the modal buttons with their respective actions
  }

  // Lifecycle hook that is called just before Angular destroys the component
  ngOnDestroy(): void {}

  // Method to initialize the form with form controls
  private initForm() {
    this.editProductForm = new FormGroup({
      id: new FormControl(''), // FormControl for product ID
      status: new FormControl(''), // FormControl for product status
      productCode: new FormControl(''), // FormControl for product code
      productName: new FormControl(''), // FormControl for product name
      customerName: new FormControl(''), // FormControl for customer name
      quantity: new FormControl(''), // FormControl for quantity
      deliveryDate: new FormControl(''), // FormControl for delivery date
    });

    this.editProductForm.reset(); // Reset the form to its initial state
  }

  // Method to set up the modal's submit button action
  private setButtons() {
    this.modalComp.modalConfig.onSubmit = this.saveChanges.bind(this); // Bind the saveChanges method to the modal's submit action
  }

  // Method to handle the save action when the form is submitted
  private saveChanges() {
    this.updateProduct(); // Call the method to update the product
    return false; // Prevent default form submission behavior
  }

  // Method to clear the form inputs
  private clearInput() {
    this.editProductForm.reset(); // Reset the form inputs
  }

  // Method to handle actions when the close button is clicked
  private closeClicked() {
    this.clearInput(); // Clear the form inputs
    return true; // Allow the modal to close
  }

  // Method to initialize the form with the selected product's data
  public initSelectedRow(selectedRowParam: Product) {
    this.selectedRow = selectedRowParam; // Store the selected product

    // Patch the form with the selected product's data
    this.editProductForm.patchValue({
      id: this.selectedRow.id,
      status: this.selectedRow.status,
      productName: this.selectedRow.productName,
      productCode: this.selectedRow.productCode,
      customerName: this.selectedRow.customerName,
      quantity: this.selectedRow.quantity,
      deliveryDate: new Date(this.selectedRow.deliveryDate).toLocaleString(), // Convert delivery date to locale string
    });
  }

  // Method to update the product using the production service
  private updateProduct() {
    // Create a product model from the form values
    let productModel: Product = {
      id: this.editProductForm.value.id,
      status: this.editProductForm.value.status,
      productCode: this.editProductForm.value.productCode,
      productName: this.editProductForm.value.productName,
      customerName: this.editProductForm.value.customerName,
      quantity: this.editProductForm.value.quantity,
      deliveryDate: new Date(this.editProductForm.value.deliveryDate) // Convert delivery date to a Date object
    };

    console.log(productModel);
    // Call the production service to update the product
    this.productionService.updateProduct(productModel).subscribe({
      next: (res: any) => {
        this.productUpdate.emit(res); // Emit an event to notify the parent component of the successful update
        this.modalComp.close(this.modalComp); // Close the modal
      },
      error: (err: any) => {
        console.error(err); // Log any errors to the console
      }
    });
  }
}
