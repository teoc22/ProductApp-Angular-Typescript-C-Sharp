// Import the necessary Angular module
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Provides this service at the root level, making it a singleton service available throughout the application
})
export class LoaderService {

  // Private variable to track the loading state
  private loading: boolean = false;

  // Constructor - no dependencies are injected for this service
  constructor() { }

  // Method to set the loading state
  setLoading(loading: boolean): void {
    this.loading = loading; // Update the loading state
  }

  // Method to get the current loading state
  getLoading(): boolean {
    return this.loading; // Return the current value of the loading state
  }
}
