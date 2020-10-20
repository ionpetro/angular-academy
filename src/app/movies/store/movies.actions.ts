import { createAction, props } from '@ngrx/store';

export const deleteMovie = createAction(
    '[Movies] Delete',
    props<{title: string}>()
);
