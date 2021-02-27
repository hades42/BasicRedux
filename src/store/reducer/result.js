import * as actionType from "../actions";
const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        /// We use concat() instead of push() because push() adding a new element to the end of the array and change the length of the existing array which mean it modify the existing array.

        /// While concat doesnt change an existing array but instead it creates a whole new array which is suitable for our cloning tasks.
        result: state.result.concat({ id: new Date(), value: action.result }),
      };
    case actionType.DELETE_RESULT:
      //// Clone a new array when we delete an element in result array of the state. filter() return a new array
      const updatedArray = state.result.filter(
        (res) => res.id !== action.resID
      );
      return {
        ...state,

        result: updatedArray,
      };
  }

  return state;
};

export default reducer;
