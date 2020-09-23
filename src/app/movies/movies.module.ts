import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieHighlighterDirective } from './movie-highlighter.directive';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MovieHighlighterDirective,
  ],
  imports: [CommonModule],
  exports: [MoviesComponent, MoviesListComponent, MovieDetailsComponent, MovieHighlighterDirective],
})
export class MoviesModule {}
