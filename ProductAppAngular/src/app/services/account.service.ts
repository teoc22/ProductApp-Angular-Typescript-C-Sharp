// Import necessary modules and services from Angular and RxJS
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provides this service at the root level, making it a singleton service available throughout the application
})
export class AccountService {

  // BehaviorSubject to keep track of the user's login state. Initially set to false (not logged in).
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // Observable that other components can subscribe to in order to react to changes in the login state
  public loggedInSub = this.loggedInSource.asObservable();

  // Constructor to inject the CookieService, which is used to manage cookies
  constructor(private cookieService: CookieService) { }

  // Method to check if the user is logged in by checking for the presence of a specific cookie
  public isLoggedIn(): boolean {
    return this.cookieService.check('cookieName'); // Returns true if the cookie exists, false otherwise
  }

  // Method to update the logged-in state based on the presence of the login cookie
  public setLoggedInState(): void {
    // Update the BehaviorSubject with the current login state
    this.loggedInSource.next(this.cookieService.check('cookieName'));
  }

}