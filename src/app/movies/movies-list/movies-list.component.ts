import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { deleteMovie } from '../store/movies.actions';
import { selectMovieItems } from '../store/movies.selector';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(private store: Store) {
    // initialize the list
    this.movies$ = store.select(selectMovieItems);
  }


  ngOnInit(): void {
  }

  deleteMovie(movie: Movie) {
    const deleteMovieObj = deleteMovie({title: movie.title});
    this.store.dispatch(deleteMovieObj);
    this.movies$ = this.store.select(selectMovieItems);
  }
}
