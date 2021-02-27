import * as actionType from "./actions";
const initialState = {

  counter: 10,
  result: [],
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
    case actionType.STORE_RESULT:
      return {
        ...state,
        /// We use concat() instead of push() because push() adding a new element to the end of the array and change the length of the existing array which mean it modify the existing array. 

        /// While concat doesnt change an existing array but instead it creates a whole new array which is suitable for our cloning tasks. 
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case actionType.DELETE_RESULT:
        //// Clone a new array when we delete an element in result array of the state. filter() return a new array
        const updatedArray = state.result.filter(res => res.id !== action.resID);
        return {
            ...state,

            result: updatedArray,
        }
  }

  return state;
};

export default reducer;
