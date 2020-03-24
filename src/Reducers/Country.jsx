import {
  SET_SINGLE_COUNTRY,
  SUMMARY_BY_COUNTRY,
  FETCH_COUNTRIES,
  CLEAR_COUNTRY_FIELD
} from "../Actions/types";

import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_COUNTRY:
      return {
        ...state,
        country: action.payload
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        countryNames: action.payload
      };
    case SUMMARY_BY_COUNTRY:
      return {
        ...state,
        summaryByCountry: action.payload
      };
    case CLEAR_COUNTRY_FIELD:
      return {
        ...state,
        country: null
      };
    default:
      return state;
  }
};
