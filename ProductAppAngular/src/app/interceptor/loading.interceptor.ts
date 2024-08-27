// Import necessary modules and services from Angular and RxJS
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  // Variable to track the number of ongoing HTTP requests
  private totalRequests = 0;

  // Constructor to inject the LoaderService
  constructor(
    private loadingService: LoaderService
  ) {}

  // Intercepts HTTP requests to manage loading state
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Increment the count of ongoing requests
    this.totalRequests++;

    // Set the loading state to true to show the loading spinner
    this.loadingService.setLoading(true);

    // Handle the HTTP request and set up a finalizer to decrement the request count
    return next.handle(request).pipe(
      finalize(() => {
        // Decrement the count of ongoing requests
        this.totalRequests--;

        // If all requests are completed, set loading state to false to hide the spinner
        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
