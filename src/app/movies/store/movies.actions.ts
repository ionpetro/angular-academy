import { createAction, props } from "@ngrx/store";
import { Movie } from "../movie";

export const fetchMovies = createAction("[Movies] fetch");
export const fetchMoviesSuccess = createAction(
  "[Movies] fetch success",
  props<{ movies: Movie[] }>()
);
export const fetchMoviesError = createAction("[Movies] fetch error");

export const deleteMovie = createAction(
  "[Movies] Delete",
  props<{ deletedMovie: Movie }>()
);

export const searchMovies = createAction(
  "[Movies] search movies",
  props<{ title: string }>()
);

export const addMovie = createAction(
  "[Movies] Add",
  props<{ newMovie: Movie }>()
);
