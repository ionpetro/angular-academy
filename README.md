# Exercise


Using [ngrx](https://ngrx.io/ "Reactive State for Angular") continue working on the same workspace. We need to have a list of movies (of course the data will reside inside the store) and when the user clicks on an item in the list, the item will be remove/get striked through. We need to follow the core concepts of the [redux](https://redux.js.org/) pattern. So the component will dispatch an action to the store. The store then with the help of a reducer will change the data in an __immutable__ way and will save a new state. The component will get updated with the help of a selector and will update the user accordingly. Create your interfaces and any other utils you think necessary.

Good luck!