// Import necessary modules and services from Angular
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root', // Defines the selector for the root component
  templateUrl: './app.component.html', // Specifies the path to the component's HTML template
  styleUrls: ['./app.component.scss'] // Specifies the path to the component's styles (note: corrected 'styleUrl' to 'styleUrls')
})
export class AppComponent implements OnInit {

  // Constructor to inject the AccountService
  constructor(private accountService: AccountService) {}

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a component
  ngOnInit(): void {
    // Set the logged-in state when the application initializes
    this.accountService.setLoggedInState();
  }
}