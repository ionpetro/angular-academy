import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { deleteMovie } from '../store/movies.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<any>;
  items = [];

  constructor(private store: Store<{movies: Array<Object>}>) {
    // initialize the list
    this.movies$ = store.select('movies');
    this.movies$.subscribe(data => this.items = data.items);
  }


  ngOnInit(): void {
  }

  deleteMovie(movie: Movie) {
    // console.log(movie.title);
    const deleteMovieObj = deleteMovie({title: movie.title});
    this.store.dispatch(deleteMovieObj);

    this.movies$ = this.store.select('movies');
    this.movies$.subscribe(data => this.items = data.items);

    // console.log(this.items)
  }
}
