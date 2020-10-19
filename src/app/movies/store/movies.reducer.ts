import { createReducer, on } from '@ngrx/store';
import { deleteMovie } from './movies.actions';

const initState = {
  items: [
    { title: 'Avengers' },
    { title: 'Batman' },
    { title: 'Superman' }],
};

export const moviesReducer = createReducer(
  initState,
  on(deleteMovie, (state, {title}) => {
    // The items property was missing below that's why we were getting an error
    // return {
    //   items: state.items.map(() => ({ title: 'new caris' })),
    // };
    return {
      items: state.items.filter(data => data.title != title)
    }
  }),
);
