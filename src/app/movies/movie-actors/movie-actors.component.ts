import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Actors } from '../actors';
import { CacheService } from '../cache.service';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-actors',
  templateUrl: './movie-actors.component.html',
  styleUrls: ['./movie-actors.component.css']
})
export class MovieActorsComponent implements OnInit, OnChanges {

  actors: Actors;
  @Input() selectedMovie: Movie;

  constructor(
    private moviesService: MoviesService,
    private cacheService: CacheService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    let cacheResult: Actors;
    //check if cache has the element
    if(this.selectedMovie) {
      cacheResult = this.cacheService.findItem(this.selectedMovie.id);

      // if cache has element, retrieve the element from cache
      if (cacheResult) {
        this.actors = cacheResult;

      // else create the request
      } else {
        this.moviesService
          .getActor(this.selectedMovie.id)
          .subscribe((actors) => {
            this.actors = actors
            this.cacheService.addToCache(actors)})
      } 
    }
  }
}
