export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const subtract = (value) => {
  return {
    type: SUBTRACT,
    value: value,
  };
};
export const saveResult = (result) => {
    // let updatedResult = result * 2;
  return {
    type: STORE_RESULT,
    result: result,
  };
};
export const store_result = (result) => {
  return (dispatch, getState) => {
      setTimeout(() =>{
          const oldCounter = getState().ctr.counter;
          console.log(oldCounter);
          dispatch(saveResult(result));
      }, 2000)
  };
};
export const add = (value) => {
  return {
    type: ADD,
    value: value,
  };
};
export const delete_result = (id) => {
  return {
    type: DELETE_RESULT,
    resID: id,
  };
};
