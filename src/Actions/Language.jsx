import { SET_SINGLE_LANGUAGE } from "./types";

export const setLanguage = lang => {
  return async dispatch => {
    dispatch({
      type: SET_SINGLE_LANGUAGE,
      payload: lang
    });
  };
};
