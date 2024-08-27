// Import necessary modules and services from Angular and the application
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProductionService } from '../../services/production.service';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-production-add-modal', // Defines the selector for the component
  templateUrl: './production-add-modal.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./production-add-modal.component.scss'] // Specifies the path to the component's styles
})
export class ProductionAddModalComponent implements OnInit, OnDestroy {

  // Input property to receive the modal component instance
  @Input() modalComp!: ModalComponent;

  // Output event emitter to notify parent component when a product is successfully added
  @Output() productAdd: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Form group for the add product form
  protected addProductForm!: FormGroup;

  // Constructor to inject the ProductionService for API calls
  constructor(private productionService: ProductionService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.initForm(); // Initialize the form
    this.setButtons(); // Set up the modal buttons with their respective actions
  }

  // Lifecycle hook that is called just before Angular destroys the component
  ngOnDestroy(): void {}

  // Method to initialize the form with form controls and validators
  private initForm() {
    this.addProductForm = new FormGroup({
      status: new FormControl('', Validators.required), // FormControl for status with required validation
      productCode: new FormControl('', Validators.required), // FormControl for product code with required validation
      productName: new FormControl('', Validators.required), // FormControl for product name with required validation
      customerName: new FormControl('', Validators.required), // FormControl for customer name with required validation
      quantity: new FormControl('', Validators.required), // FormControl for quantity with required validation
      deliveryDate: new FormControl('', Validators.required), // FormControl for delivery date with required validation
    });

    this.addProductForm.reset(); // Reset the form to its initial state
  }

  // Method to set up the modal buttons' actions
  private setButtons() {
    this.modalComp.modalConfig.onSubmit = this.saveChanges.bind(this); // Bind the saveChanges method to the modal's submit action
    
    // Uncomment if a custom close action is needed
    // this.modalComp.modalConfig.onClose = this.closeClicked.bind(this);
  }

  // Method to handle saving changes when the form is submitted
  private saveChanges() {
    this.addProductList(); // Call the method to add the product
    return false; // Prevent default form submission behavior
  }
  
  // Method to clear the form inputs
  private clearInput() {
    this.addProductForm.reset(); // Reset the form inputs
  }

  // Method to handle actions when the close button is clicked
  private closeClicked() {
    this.clearInput(); // Clear the form inputs
    return true; // Allow the modal to close
  }
  
  // Method to add a new product to the list
  private addProductList(): any {
    this.addProductForm.markAllAsTouched(); // Mark all form controls as touched to trigger validation

    if (!this.addProductForm.valid) {
      return; // If the form is invalid, do nothing
    }

    // Create a product model from the form values
    let productModel: Product = {
      status: this.addProductForm.value.status,
      productCode: this.addProductForm.value.productCode,
      productName: this.addProductForm.value.productName,
      customerName: this.addProductForm.value.customerName,
      quantity: this.addProductForm.value.quantity,
      deliveryDate: new Date() // Set the delivery date to the current date
    };

    // Call the production service to add the product
    this.productionService.addProduct(productModel).subscribe({
      next: (res: any) => {
        this.productAdd.emit(true); // Emit an event to notify the parent component of the successful addition
        this.modalComp.close(this.modalComp); // Close the modal
      },
      error: (err: any) => {
        console.error(err); // Log any errors to the console
      }
    });
  }
}
