import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
  } from "../state/actionCreators";
  
  export const initialState = {
    user: {},
    isFetch: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          isFetch: true,
          error: ""
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetch: false,
          error: ""
        };
      case FETCH_DATA_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };