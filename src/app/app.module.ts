import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { moviesReducer } from './movies/store/movies.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MoviesModule,
    StoreModule.forRoot({
      movies: moviesReducer,
    }),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
