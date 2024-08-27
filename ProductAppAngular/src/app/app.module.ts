// Import necessary Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

// Import your application components
import { ProductionComponent } from './components/production/production.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductionAddModalComponent } from './components/production-add-modal/production-add-modal.component';
import { ProductionEditModalComponent } from './components/production-edit-modal/production-edit-modal.component';
import { ProductionDeleteModalComponent } from './components/production-delete-modal/production-delete-modal.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Import your custom interceptor
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Declare all components that belong to this module
    AppComponent,
    ProductionComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavBarComponent,
    ProductionAddModalComponent,
    ProductionEditModalComponent,
    ProductionDeleteModalComponent,
    ModalComponent,
    SpinnerComponent
  ],
  imports: [
    // Import all necessary modules for this application
    BrowserModule, // Required for running the application in a web browser
    HttpClientModule, // Provides HTTP services for making API requests
    AppRoutingModule, // Handles routing within the application
    NgbModule, // ng-bootstrap module for Bootstrap components
    BrowserAnimationsModule, // Enables animations in the application
    ReactiveFormsModule, // Provides support for reactive forms
    MatCardModule, // Material Design card module
    MatFormFieldModule, // Material Design form field module
    MatInputModule, // Material Design input module
    MatButtonModule, // Material Design button module
    MatSnackBarModule, // Material Design snackbar module for notifications
    MatToolbarModule, // Material Design toolbar module
    MatIconModule, // Material Design icon module
    MatTableModule, // Material Design table module
    FormsModule // Provides support for template-driven forms
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
      // Registers the LoadingInterceptor to intercept all HTTP requests
    },
    provideClientHydration(), // Provides client hydration support for server-side rendering with Angular Universal
  ],
  bootstrap: [AppComponent] // Bootstraps the application with the root component
})
export class AppModule { }
