import {
  SET_SINGLE_COUNTRY,
  SUMMARY_BY_COUNTRY,
  FETCH_COUNTRIES,
  CLEAR_COUNTRY_FIELD
} from "./types";

import { ApiDispatch } from "../Components/Api/index";

export const saveCountry = data => {
  return async dispatch => {
    dispatch({
      type: SET_SINGLE_COUNTRY,
      payload: data
    });
  };
};

export const handleLoadCountries = () => {
  return ApiDispatch({
    url: `/api/countries`,
    method: "GET",
    dispatch_type: FETCH_COUNTRIES,
    timeout: 5000
  });
};

export const handleSummmaryByCountry = data => {
  return ApiDispatch({
    url: `/api/countries/${data}`,
    method: "GET",
    dispatch_type: SUMMARY_BY_COUNTRY,
    timeout: 5000
  });
};

export const handleClearCountry = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_COUNTRY_FIELD
    });
  };
};
