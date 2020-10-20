import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { MoviesService } from '../movies.service';
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  searchMovies,
} from './movies.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMovies),
      switchMap(() =>
        this.moviesService.fetchMovies().pipe(
          map((movies) => fetchMoviesSuccess({ movies })),
          catchError(() => of(fetchMoviesError()))
        )
      )
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovies),
      switchMap(({ title }) =>
        this.moviesService
          .searchMovies(title)
          .pipe(map((movies) => fetchMoviesSuccess({ movies })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
