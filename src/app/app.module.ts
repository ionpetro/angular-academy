import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { ObservablesModule } from './observables/observables.module';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [BrowserModule, MoviesModule, ObservablesModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
