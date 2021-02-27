import * as actionType from "../actions";
const initialState = {
  counter: 10,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      //// This is the first way to clone state
      const cloneState = { ...state };
      cloneState.counter = state.counter + 1;
      return cloneState;
    case actionType.DECREMENT:
      //// This is the second way to clone state
      return {
        //// Clone the first layer of the object
        ...state,
        //// Change the attribute counter and leave the result untouch
        counter: state.counter - 1,
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }

  return state;
};

export default reducer;
