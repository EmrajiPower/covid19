import { SET_SINGLE_COUNTRY } from "./types";

export const saveCountry = data => {
  return async dispatch => {
    dispatch({
      type: SET_SINGLE_COUNTRY,
      payload: data
    });
  };
};
