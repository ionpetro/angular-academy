import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-observables-recommendation',
  template: `<p>observables-recommendation works!</p>

  <form [formGroup]="recommendationForm">
      <input type="text" formControlName="input">
      <div>
          <ul>
              <li *ngFor="let suggestion of suggestions">
                  {{suggestion}}    
              </li>
          </ul>
      </div>
  </form>`,
  styleUrls: ['./observables-recommendation.component.css']
})
export class ObservablesRecommendationComponent implements OnInit {

  // Create an input field using reactive forms technique.

  // When the users starts typing and he types the third character propose a suggestion from a suggestion list.
  // The list can be an array with some predefined words.
  // When there is no suggestion just show the value.
  // Please implement this with relative techniques to the reactive forms and the observables.

  recommendationForm: FormGroup;
  suggestions: string[] = [];

  // testing with strings starting with 'one'
  recommendationList: string[] = ['oneUno', 'ona', 'oneone', 'oneoneTwo', 'oneoneone', 'twoone'];

  constructor() { }

  clearSuggestions() {
    this.suggestions = [];
  }

  showRecommendations() {
    const inputControl = this.recommendationForm.get('input');

    // inputControl.valueChanges returns an observable<any>
    inputControl.valueChanges.subscribe(x => {
      // start showing results after 3 letters
      if (x.length > 2) {
        this.suggestions = this.recommendationList
          .filter(item => item.startsWith(x))

        // no suggestions yet, so display the text
        if (this.suggestions.length === 0) {
            this.suggestions.push(x)
        }
      }

      // empty the suggestions array when the input is empty
      if (x === '') {
        this.clearSuggestions();
      }
      // see the suggestions array here
      // console.log(this.suggestions)
    })
  }
  
  ngOnInit(): void {
    this.recommendationForm = new FormGroup({
      input: new FormControl('')
    })
    this.showRecommendations();
  }

}
