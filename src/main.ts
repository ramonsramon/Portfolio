import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactMeComponent } from './app/contact-me/contact-me.component';
import { ThankYouComponent } from './app/thank-you/thank-you.component';
import { ComingSoonComponent } from './app/coming-soon/coming-soon.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ContactService } from './app/contact.service';
import { LoadingService } from './app/loading.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactme', component: ContactMeComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: 'construction', component: ComingSoonComponent },
  { path: '**', component: HomeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    ContactService,
    LoadingService,
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
});
