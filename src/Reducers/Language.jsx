import { SET_SINGLE_LANGUAGE } from "../Actions/types";

import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};
