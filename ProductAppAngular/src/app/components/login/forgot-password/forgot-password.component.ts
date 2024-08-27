// Import necessary modules and services from Angular and the application
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdatePassword } from '../../../models/credentials.model';

@Component({
  selector: 'app-forgot-password', // Defines the selector for the component
  templateUrl: './forgot-password.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./forgot-password.component.scss'] // Specifies the path to the component's styles
})
export class ForgotPasswordComponent {

  // Property to control the display of an error message if passwords do not match
  protected showMessage: boolean = false;

  // Constructor to inject necessary services: AuthenticationService, MatSnackBar, and Router
  constructor(private authenticationService: AuthenticationService, private snackBar: MatSnackBar, private router: Router) {}

  // FormGroup instance to manage the form fields and their validation states
  protected forgotPasswordForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required), // FormControl for the username (email) with required validation
    newPassword: new FormControl('', Validators.required), // FormControl for the new password with required validation
    confirmNewPassword: new FormControl('', Validators.required) // FormControl for confirming the new password with required validation
  });

  // Method to handle password reset when the user submits the form
  public resetPassword() {
    // Mark all form controls as touched to trigger validation messages
    this.forgotPasswordForm.markAllAsTouched();

    // Check if the form is invalid and stop the execution if true
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    // Extract values from the form controls
    let username = this.forgotPasswordForm.value.username;
    let newPassword = this.forgotPasswordForm.value.newPassword;
    let confirmNewPassword = this.forgotPasswordForm.value.confirmNewPassword;

    // Check if the new password and confirm new password fields do not match
    if (newPassword !== confirmNewPassword) {
      this.showMessage = true; // Display an error message if passwords do not match
      return; // Stop further execution
    }

    // Prepare the credentials model to be sent to the server for password update
    let credentialsModel: UpdatePassword = {
      username: username,
      password: newPassword,
      newPassword: confirmNewPassword,
    };

    // Call the authentication service to update the password
    this.authenticationService.updatePassword(credentialsModel).subscribe({
      next: (res: any) => {
        // On successful password update, navigate the user to the login page and display a success message
        this.router.navigate(['/login']);
        this.openSuccessSnackBar(res.message);
      },
      error: (err: any) => {
        // Log the error and display a failure message if the password update fails
        console.log(err);
        this.openFailureSnackBar(err.error);
      }
    });
  }

  // Method to display a success message in a snackbar with custom styling
  public openSuccessSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 3000, // Display the snackbar for 3 seconds
      panelClass: ['green-snackbar', 'register-snackbar'], // Apply custom classes for styling
    });
  }

  // Method to display a failure message in a snackbar with custom styling
  public openFailureSnackBar(message: string) {
    this.snackBar.open(message, "Try again!", {
      duration: 3000, // Display the snackbar for 3 seconds
      panelClass: ['red-snackbar', 'register-snackbar'], // Apply custom classes for styling
    });
  }
}