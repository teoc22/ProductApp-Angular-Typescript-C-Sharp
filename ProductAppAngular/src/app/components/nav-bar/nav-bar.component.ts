// Import necessary modules and services from Angular and the application
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar', // Defines the selector for the component
  templateUrl: './nav-bar.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./nav-bar.component.scss'] // Specifies the path to the component's styles
})
export class NavBarComponent implements OnInit, OnDestroy {

  // Property to track if the user is logged in
  protected isLoggedIn: boolean = false;

  // Property to manage subscriptions to avoid memory leaks
  private subscriptions: Subscription = new Subscription();

  // Constructor to inject necessary services: Router, CookieService, and AccountService
  constructor(private router: Router, private cookieService: CookieService, private accService: AccountService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    this.addLoggedInSub(); // Subscribe to the login state observable
  }

  // Lifecycle hook that is called just before Angular destroys the component
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe from all subscriptions to avoid memory leaks
  }

  // Private method to subscribe to the loggedInSub observable from AccountService
  private addLoggedInSub() {
    let loggedInSub$ = this.accService.loggedInSub.subscribe((value: boolean) => {
      this.isLoggedIn = value; // Update isLoggedIn property based on the emitted value
    });

    // Add the subscription to the subscriptions list for proper cleanup
    this.subscriptions.add(loggedInSub$);
  }

  // Method to redirect the user to the login page
  protected redirectToLogin() {
    this.router.navigate(['/login']);
  }

  // Method to redirect the user to the registration page
  protected redirectToRegister() {
    this.router.navigate(['/register']);
  }

  // Method to handle user logout
  protected logOut() {
    this.cookieService.delete('cookieName'); // Delete the login cookie
    this.accService.setLoggedInState(); // Update the logged-in state in the AccountService
    this.router.navigate(['/login']); // Redirect the user to the login page
  }
}
