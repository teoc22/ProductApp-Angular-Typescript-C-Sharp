// Import necessary modules and services from Angular and the application
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../models/credentials.model';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login', // Defines the selector for the component
  templateUrl: './login.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./login.component.scss'] // Specifies the path to the component's styles
})
export class LoginComponent implements OnInit {

  // Constructor to inject necessary services: AuthenticationService, MatSnackBar, Router, CookieService, and AccountService
  constructor(
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private cookieService: CookieService,
    private accService: AccountService
  ) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.checkLoggedUser(); // Check if the user is already logged in
  }

  // Method to check if the user is already logged in by checking the presence of a specific cookie
  private checkLoggedUser() {
    if (this.cookieService.check('cookieName')) 
      this.router.navigate(['/products-list']); // Redirect to products list if the cookie is present
  }

  // FormGroup instance to manage the form fields and their validation states
  protected loginInputForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required), // FormControl for the username with required validation
    passWord: new FormControl('', Validators.required) // FormControl for the password with required validation
  });

  // Method to handle the login process when the user submits the form
  public loginInput() {
    let userName = this.loginInputForm.value.userName; // Get the username from the form
    let passWord = this.loginInputForm.value.passWord; // Get the password from the form

    // Prepare the credentials model to be sent to the server for authentication
    let credentialsModel: Credentials = {
      username: userName,
      password: passWord
    };

    // Call the authentication service to perform login
    this.authenticationService.login(credentialsModel).subscribe({
      next: (res: any) => {
        // On successful login, navigate the user to the products list, set a cookie, and update logged-in state
        this.router.navigate(['/products-list']);
        this.cookieService.set('cookieName', 'cookieValue');
        this.accService.setLoggedInState();
      },
      error: (err: any) => {
        // Log the error and display a failure message if the login fails
        console.log(err);
        this.openFailureSnackBar(err.error);
      }
    });
  }

  // Method to display a failure message in a snackbar with custom styling
  public openFailureSnackBar(message: string) {
    this.snackBar.open(message, "Try again!", {
      duration: 3000, // Display the snackbar for 3 seconds
      panelClass: ['red-snackbar', 'register-snackbar'], // Apply custom classes for styling
    });
  }

  // Method to navigate the user to the forgot password page
  public forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
