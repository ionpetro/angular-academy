import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  data: Movie[] = [
    { title: 'inception' },
    { title: 'the godfather' },
    { title: 'batman' },
    { title: 'superman' },
    { title: 'superman2' },
  ];
  constructor() {}

  fetchMovies() {
    return of(this.data).pipe(timeout(1000));
  }

  searchMovies(searchTerm: string) {
    const filteredMovies = this.data.filter((movie) => {
      return movie.title.includes(searchTerm);
    });

    return of(filteredMovies);
  }
}
