import { Injectable } from '@angular/core';
import { Actors } from './actors';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  cache: Actors[] = [];
  
  addToCache(actors: Actors): void {
    this.cache.push(actors);
  }

  findItem(id: number): Actors {
    let result: Actors;
    this.cache.forEach(item => {
      if (item.movieId === id) {
        result = item;
      }
    })
    return result;
  }
}
