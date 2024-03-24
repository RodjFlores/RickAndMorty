import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
