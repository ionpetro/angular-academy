import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  value = '';

  @Output() searchMovieEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getInputValue(input: string) {
    this.value = input;
    this.searchMovieEvent.emit(this.value);
  }

}
