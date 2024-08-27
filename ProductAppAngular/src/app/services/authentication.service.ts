// Import necessary modules and models from Angular and the application
import { Injectable } from '@angular/core';
import { Credentials, UpdatePassword } from '../models/credentials.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Provides this service at the root level, making it a singleton service available throughout the application
})
export class AuthenticationService {
  
  // Base URL for the authentication controller on the backend
  private controllerUrl: string = "https://localhost:7105/api/Authentication/";

  // Constructor to inject the HttpClient for making HTTP requests
  constructor(private http: HttpClient) { }

  // Method to handle user registration
  public register(credentials: Credentials) {
    // Sends a POST request to the 'Register' endpoint with the user's credentials
    return this.http.post(this.controllerUrl + 'Register', credentials);
  }

  // Method to handle password update
  public updatePassword(credentialsModel: UpdatePassword) {
    // Sends a POST request to the 'UpdatePassword' endpoint with the current and new password
    return this.http.post(this.controllerUrl + 'UpdatePassword', credentialsModel);
  }

  // Method to handle user login
  public login(credentialsModel: Credentials) {
    // Sends a POST request to the 'Login' endpoint with the user's credentials
    return this.http.post(this.controllerUrl + 'Login', credentialsModel);
  }

  // Method to handle user logout
  public logout(credentialsModel: Credentials) {
    // Sends a POST request to the 'Logout' endpoint with the user's credentials (if needed)
    return this.http.post(this.controllerUrl + 'Logout', credentialsModel);
  }

}
