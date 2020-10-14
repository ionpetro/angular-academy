import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../auth/users';
import { Actors } from './actors';
import { Movie } from './movie';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [
      { id: 1, title: 'Inception', dateReleased: '16-07-2010'},
      { id: 2, title: 'Lord of the Rings', dateReleased: '19-12-2001'},
      { id: 3, title: 'Avengers', dateReleased: '26-04-2019'},
      { id: 4, title: 'Batman', dateReleased: '18-07-2008'},
    ];
    const actors: Actors[] = [
      { id: 1, movieId: 1, names: ['Leonardo di Caprio', 'Tom Hardy', 'Helen Page']},
      { id: 2, movieId: 2, names: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen']},
      { id: 3, movieId: 3, names: ['Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson']},
      { id: 4, movieId: 4, names: ['Robert Pattinson', 'Charlie Carver', 'Colin Farrell']}
    ];
    const users: User[]= [
      { id: 1, firstname: 'George', lastname: 'Papado', username: 'gpapado', password: '1234'}
    ]
    return { movies, actors, users };
  }
}
