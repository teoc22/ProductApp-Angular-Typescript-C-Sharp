// Import necessary modules and components from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { ProductionComponent } from './components/production/production.component';

// Define the routes for the application
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent // Default route redirects to the LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'products-list', component: ProductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import RouterModule and configure it with the routes
  exports: [RouterModule] // Export RouterModule so it can be used throughout the app
})
export class AppRoutingModule { }
