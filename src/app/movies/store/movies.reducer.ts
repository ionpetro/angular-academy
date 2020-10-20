import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie';
import { addMovie, deleteMovie, fetchMoviesSuccess } from './movies.actions';

export interface State {
  items: Movie[];
}

const initState: State = {
  items: [],
};

export const moviesReducer = createReducer(
  initState,
  on(fetchMoviesSuccess, (state, { movies }) => {
    // The items property was missing below that's why we were getting an error
    return {
      ...state,
      items: movies,
    };
  }),

  on(addMovie, (state, newMovieAction) => {
    console.log(newMovieAction)
    return {
      ...state,
      items: [...state.items, newMovieAction.newMovie]
    };
  }),

  on(deleteMovie, (state, { movieTitle }) => {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.title === movieTitle) {
          return {
            ...item,
            deleted: true,
          };
        }

        return item;
      }),
    };
  })
);
