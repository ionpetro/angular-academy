import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie';
import { deleteMovie } from './movies.actions';

export interface AppState {
  movies: MoviesState;
}

export interface MoviesState {
  items: Array<Movie>;
}

const initState = {
  items: [
    { title: 'Avengers' },
    { title: 'Batman' },
    { title: 'Superman' }],
};

export const moviesReducer = createReducer(
  initState,
  on(deleteMovie, (state, {title}) => {
    return {
      items: state.items.filter(data => data.title != title)
    }
  }),
);
