// Import necessary modules from Angular and ng-bootstrap
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig, ModalStatus } from './modal.model';

@Component({
  selector: 'app-modal', // Defines the selector for the component
  templateUrl: './modal.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./modal.component.scss'] // Specifies the path to the component's styles
})
export class ModalComponent implements OnInit {

  // Input property to receive modal configuration from the parent component
  @Input() modalConfig!: ModalConfig;

  // ViewChild to reference the template content where the modal will be displayed
  @ViewChild("content") contentElement: any;

  // Property to store the result of the modal closing event
  closeResult = '';

  // Property to set the CSS class for the modal header based on the modal type
  protected headerClass: string = "";

  // Constructor to inject NgbModal service
  constructor(private modalService: NgbModal) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    // Parse the modal type to determine the header class
    this.parseModalType(this.modalConfig.type);
  }

  // Method to open the modal
  open() {
    this.modalService.open(this.contentElement, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  // Method to close the modal
  close(modal: any) {
    this.modalService.dismissAll();
  }

  // Method to handle the submit action when the submit button is clicked
  submit() {
    if(this.modalConfig.onSubmit) {
      this.modalConfig.onSubmit();
    }
  }

  // Private method to get the reason for modal dismissal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Method to determine the CSS class for the modal header based on the modal type
  protected parseModalType(status: ModalStatus) {
    switch (status) {
      case ModalStatus.Success:
        this.headerClass = "bg-success";
        break;
      case ModalStatus.Error:
        this.headerClass = "bg-danger";
        break;
      case ModalStatus.Alert:
        this.headerClass = "bg-info";
        break;
      case ModalStatus.Default:
        this.headerClass = "bg-info";
        break;
      default:
        break;
    }
  }
}