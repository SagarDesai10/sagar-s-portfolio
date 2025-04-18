import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';

const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get('redirect');
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
