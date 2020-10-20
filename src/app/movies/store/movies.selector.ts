import { createSelector } from '@ngrx/store';
import { AppState, MoviesState } from './movies.reducer';

export const selectMovie = (state: AppState) => state.movies;

export const selectMovieItems = createSelector(
    selectMovie,
    (state: MoviesState) => state.items
)
