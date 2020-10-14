import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-input',
  templateUrl: './observables-input.component.html',
  styleUrls: ['./observables-input.component.css']
})
export class ObservablesInputComponent implements OnInit, AfterViewInit {

  @ViewChild('input') input: ElementRef;

  constructor() {}
  
  ngOnInit(): void {
  }

  // Create an observable that publishes Events

  // Create a component with an input field
  // Add the AfterViewInit lifecycle hook
  // Create an Observable that publishes key down events
  // Subscribe to it and when the user presses ESC button empty the input field
  // The keyboard code for Esc is “Escape”

  
  ngAfterViewInit(): void {

      // 1st way: we can use "getElementById" implementation

      // let nameInput = <HTMLInputElement>document.getElementById('input');
      // const terms$ = fromEvent(nameInput, 'keydown');
      // terms$.subscribe((x: KeyboardEvent) => {
      //   console.log(x)
      //   if (x.key === 'Escape') {
      //     nameInput.value = '';
      //   }
      // });

      // 2nd way: use ViewChild
        
      // const terms$ = fromEvent(this.input.nativeElement, 'keydown');
      // terms$.subscribe((x: KeyboardEvent) => {
      //   if (x.key === 'Escape') {
      //     this.input.nativeElement.value = '';
      //   }
      // });

      // 3rd way: create the Observable by myself
      
      let nameInput = <HTMLInputElement>document.getElementById('input');
      const terms$ = new Observable((subscriber) => {
        nameInput.onkeydown = (event) => {subscriber.next(event)};
      });
      terms$.subscribe((x: KeyboardEvent) => {
        console.log(x.key)
        if (x.key === 'Escape') {
          this.input.nativeElement.value = '';
        }
      });

  }

}
