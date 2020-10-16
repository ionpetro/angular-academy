import { createReducer, on } from '@ngrx/store';
import { deleteMovie } from './movies.actions';

const initState = {
  items: [{ title: 'charis' }],
};

export const moviesReducer = createReducer(
  initState,
  on(deleteMovie, (state) => {
    // The items property was missing below that's why we were getting an error
    return {
      items: state.items.map(() => ({ title: 'new caris' })),
    };
  }),
);
