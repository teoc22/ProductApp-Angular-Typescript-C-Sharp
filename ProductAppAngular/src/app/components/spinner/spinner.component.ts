// Import necessary modules and services from Angular and the application
import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-spinner', // Defines the selector for the component
  templateUrl: './spinner.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./spinner.component.scss'] // Specifies the path to the component's styles
})
export class SpinnerComponent {

  // Inject the LoaderService into the component
  constructor(public loader: LoaderService) { }
}
