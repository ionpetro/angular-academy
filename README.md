# Exercises

1. Create a movie-item component that will be a child of movies-list. It will trigger an event when the user clicks on a movie, and the movies-list will listen to that event and trigger another event for app-root.

```html
<app-root>
  <app-movies-list>
    <app-movie-item></app-movie-item>
  </app-movies-list>
  <app-movie-details></app-movie-details>
</app-root>
```

2. Create an input above the movies-list in order to give the user the option to filter the movies based on their input. It is up to you to figure out how to implement this.

```html
<app-root>
  <app-movies-search></app-movies-search>
  <app-movies-list></app-movies-list>
  <app-movie-details></app-movie-details>
</app-root>
```

The purpose of these exercises is to make you familiar with the angular components as well as their inputs & outputs. Feel free to continue working on this project and add your own features you feel like!
