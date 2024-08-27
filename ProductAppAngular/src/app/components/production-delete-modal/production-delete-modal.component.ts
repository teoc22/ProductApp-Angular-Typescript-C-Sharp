// Import necessary modules and services from Angular and the application
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProductionService } from '../../services/production.service';

@Component({
  selector: 'app-production-delete-modal', // Defines the selector for the component
  templateUrl: './production-delete-modal.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./production-delete-modal.component.scss'] // Specifies the path to the component's styles
})
export class ProductionDeleteModalComponent implements OnInit {

  // Input property to receive the modal component instance
  @Input() modalComp!: ModalComponent;

  // Output event emitter to notify parent component when a product is successfully deleted
  @Output() productDelete: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  // Property to store the ID of the product to be deleted
  private id!: number;

  // Constructor to inject the ProductionService for API calls
  constructor(private productionService: ProductionService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.setDeleteButtons(); // Set up the modal buttons with their respective actions
  }

  // Method to initialize the selected product's ID
  initSelectedRow(id: number) {
    this.id = id; // Store the selected product's ID
  }

  // Method to set up the modal's delete button action
  private setDeleteButtons() {
    this.modalComp.modalConfig.onSubmit = this.saveChanges.bind(this); // Bind the saveChanges method to the modal's submit action
  }

  // Method to handle the delete action when the form is submitted
  private saveChanges() {
    this.deleteProduct(); // Call the method to delete the product
    return false; // Prevent default form submission behavior
  }

  // Method to delete the selected product
  private deleteProduct() {
    this.productionService.deleteProduct(this.id).subscribe({
      next: (res: any) => {
        this.productDelete.emit(res); // Emit an event to notify the parent component of the successful deletion
        this.modalComp.close(this.modalComp); // Close the modal
      },
      error: (err: any) => {
        console.error(err); // Log any errors to the console
      }
    });
  }
}
