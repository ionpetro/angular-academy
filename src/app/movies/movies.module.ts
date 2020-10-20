import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [CommonModule, FormsModule],
  exports: [MoviesListComponent],
})
export class MoviesModule {}
