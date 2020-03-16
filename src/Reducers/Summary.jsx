import { FETCH_SUMMARY } from "../Actions/types";

import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return {
        ...state,
        summary: action.payload
      };
    default:
      return state;
  }
};
