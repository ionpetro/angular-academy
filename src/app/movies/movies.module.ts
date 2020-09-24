import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieHighlighterDirective } from './movie-highlighter.directive';

@NgModule({
  declarations: [MoviesListComponent, MovieDetailsComponent, MovieHighlighterDirective],
  imports: [CommonModule],
  exports: [MoviesListComponent, MovieDetailsComponent, MovieHighlighterDirective],
})
export class MoviesModule {}
