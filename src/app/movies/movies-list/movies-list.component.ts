import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import {
  deleteMovie,
  fetchMovies,
  searchMovies,
} from '../store/movies.actions';
import { moviesSelector } from '../store/movies.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  searchTerm = '';
  movies$: Observable<Movie[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchMovies());
    this.movies$ = this.store.select(moviesSelector);
  }

  deleteMovie(movieTitle: string) {
    const deleteMovieObj = deleteMovie({ movieTitle });
    this.store.dispatch(deleteMovieObj);
  }

  searchMovies(searchTerm: string) {
    this.store.dispatch(searchMovies({ title: searchTerm }));
  }
}
