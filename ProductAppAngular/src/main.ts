/// <reference types="@angular/localize" />
// This line references the Angular localization types, enabling support for Angular's localization features.
// It's necessary if your application uses Angular's i18n (internationalization) features for translating content.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Imports the function that bootstraps an Angular module in the browser. It dynamically compiles and bootstraps the app.

import { AppModule } from './app/app.module';
// Imports the root Angular module of your application, which is the entry point for bootstrapping.

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
// Bootstraps the `AppModule` with specific options.
// `ngZoneEventCoalescing: true` is an optimization flag that can improve performance by coalescing (merging) multiple events into one change detection cycle.

  .catch(err => console.error(err));
// Catches any errors that occur during the bootstrapping process and logs them to the console.
