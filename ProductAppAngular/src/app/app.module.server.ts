// Import necessary Angular modules
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module'; // Import the main application module
import { AppComponent } from './app.component'; // Import the root component

@NgModule({
  imports: [
    AppModule,      // Import the main AppModule, which contains the application logic
    ServerModule,   // Import the ServerModule to enable server-side rendering with Angular Universal
  ],
  bootstrap: [AppComponent], // Bootstrap the application with the root AppComponent
})
export class AppServerModule {}
