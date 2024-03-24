import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { SharedModule } from './shared/shared.module';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, SharedModule),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch((err) => console.error(err));
