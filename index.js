const redux = require("redux");
const createStore = redux.createStore;

// Actions

//line 7 is only done to avoid spelling mistakes when reusing the action, it is optional
// Its just a string constant that indicates the type of the action
const BUY_CAKE = "BUY_CAKE";

// AN Action is an object that has a type property
// An Action Creator: This simply creates an action
// An Action Creator is a function that simply returns an action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

// (previousState, action) => newState

// Initial State
// First principle of Redux
// Our Application state has to be represented by a single object

const initialState = {
  numOfCakes: 10,
};

// Reducer function
//Reducer is a pure function that accepts state and action as arguments and returns a new state of the application
// Spread operator is first used to make a copy of the initail state
// And then only update the numOfCakes if there were other properties it will remain unchanged
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

//Store
//Responsibilities of the Redux store
// 1. It holds our Applicaton state
// 2. Allows access to state via getState()
// 3. Allows state to be updated via dispatch(action)
// 4. Allows us to Register listeners via subscribe(listener)
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// Store provides a dispatch method to update the state
// the dispatch method accepts an action as its parameter
// we can provide an action into the dispatch method directly but we have an action creator
// The Action Creator function (buyCake) is invoked
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
