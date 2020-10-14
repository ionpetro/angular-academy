import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() item: Movie;
  @Output() movieItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: Movie) {
    this.movieItemEvent.emit(event);
  }

}
