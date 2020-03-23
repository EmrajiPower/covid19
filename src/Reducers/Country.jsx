import { SET_SINGLE_COUNTRY } from "../Actions/types";

import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_COUNTRY:
      console.log("--->", action.payload);
      return {
        ...state,
        country: action.payload
      };
    default:
      return state;
  }
};
