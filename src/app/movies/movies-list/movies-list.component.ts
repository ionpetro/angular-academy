import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Movie[] = [
    { title: 'Inception', dateReleased: '16-07-2010' },
    { title: 'Lord of the Rings', dateReleased: '19-12-2001' },
    { title: 'Avengers', dateReleased: '26-04-2019' },
    { title: 'Batman', dateReleased: '18-07-2008' },
  ];

  @Output()
  movieSelected = new EventEmitter();

  constructor() {
    console.warn('FROM CONSTRUCTOR');
  }

  ngOnInit(): void {}

  ngOnChanges() {}
}
