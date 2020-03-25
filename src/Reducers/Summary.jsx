import { FETCH_SUMMARY, FETCH_SUMMARY_BY_DAY } from "../Actions/types";

import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return {
        ...state,
        summary: action.payload
      };
    case FETCH_SUMMARY_BY_DAY:
      return {
        ...state,
        summaryByDay: action.payload
      };
    default:
      return state;
  }
};
