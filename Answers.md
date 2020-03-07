1. What problem does the context API help solve?

Removes the need of excessive props drilling by placing state in a context object that can be accessed by components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the portion of our code that holds state and connects it to our app. An action is a function that dispatches a payload (a change in state) along with a type to our reducer. The reducer uses the Type from our action to match a case and change the state accordingly. State is never changed directly but is updated by replacing state with a new state. It is known as the single source of truth because state resides only in the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is used by the whole app or a majority of its components. Component state is state that is used only by the component it resides in. If state is not needed within any other component then its best to use component state otherwise use application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 Redux-thunk is middleware that allows us to make async axios calls when needed. It allows us to make our actions follow the finite state machine paradigm. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I personally prefer Redux. While Context API seems to function a lot easier and its syntax seems simple I prefer to use props when possible because for me its a lot easier to keep track of everything. With Redux theres one place for state and it makes things a lot easier.
