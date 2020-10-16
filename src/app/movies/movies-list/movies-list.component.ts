import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteMovie } from '../store/movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  deleteMovie() {
    const deleteMovieObj = deleteMovie();
    this.store.dispatch(deleteMovieObj);
  }
}
