// Import necessary modules and services from Angular and the application
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Credentials } from '../../models/credentials.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register', // Defines the selector for the component
  templateUrl: './register.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./register.component.scss'] // Specifies the path to the component's styles
})
export class RegisterComponent implements OnInit {

  // Form group for the registration form
  protected registerInputForm!: FormGroup;

  // Constructor to inject necessary services: AuthenticationService, MatSnackBar, and Router
  constructor(private authenticationService: AuthenticationService, private snackBar: MatSnackBar, private router: Router) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.initForm(); // Initialize the form
  }

  // Method to initialize the form with form controls and validators
  private initForm() {
    this.registerInputForm = new FormGroup({
      userName: new FormControl('', Validators.required), // FormControl for userName with required validation
      passWord: new FormControl('', Validators.required), // FormControl for passWord with required validation
    });
  }

  // Method to handle the registration process when the form is submitted
  public registerInput() {
    // Extract the values from the form controls
    const userName = this.registerInputForm.value.userName;
    const passWord = this.registerInputForm.value.passWord;

    // Create a Credentials object from the form values
    const credentialsModel: Credentials = {
      username: userName,
      password: passWord
    };

    // Call the authentication service to register the user
    this.authenticationService.register(credentialsModel).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']); // Navigate to the login page on successful registration
        this.openSuccessSnackBar(res.message); // Show a success snackbar with a custom message
      },
      error: (err: any) => {
        console.log(err); // Log any errors to the console
        this.openFailureSnackBar(err.error); // Show a failure snackbar with the error message
      }
    });
  }
  
  // Method to show a success snackbar with a custom message
  public openSuccessSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 3000, // Display the snackbar for 3 seconds
      panelClass: ['green-snackbar', 'register-snackbar'], // Apply custom styling to the snackbar
    });
  }

  // Method to show a failure snackbar with a custom message
  public openFailureSnackBar(message: string) {
    this.snackBar.open(message, "Try again!", {
      duration: 3000, // Display the snackbar for 3 seconds
      panelClass: ['red-snackbar', 'register-snackbar'], // Apply custom styling to the snackbar
    });
  }
}
