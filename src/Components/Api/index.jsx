import axios from "axios";

export const getUrlApi = (url = "") => {
  const API_URL = process.env.REACT_APP_BASE_URL;
  return API_URL + url;
};

export const ApiAction = async ({
  url = "",
  method,
  params = null,
  timeout,
  count_timeout = 0,
  onSuccess = () => ({
    params
  }),
  onFailure = error => {
    throw error;
  }
}) => {
  try {
    let response, parseResponse;
    const URL = getUrlApi(url);
    // console.log("[Inicio de Petición]: ", console.time(URL));
    if (method === "GET") {
      response = await axios.get(URL, {
        params: params,
        timeout
      });
    }
    if (method === "POST") {
      response = await axios.post(URL, params, { timeout });
    }
    if (response.data.data) {
      // parseResponse = JSON.parse(response.data.data);
      parseResponse = response.data.data;
    }
    if (response.data) {
      // parseResponse = JSON.parse(response.data);
      parseResponse = response.data;
    }
    // console.log("[Fin de Petición]: ", console.timeEnd(URL));
    return onSuccess(parseResponse);
  } catch (error) {
    if (count_timeout <= 3 && error.code === "ECONNABORTED") {
      console.log("[Timeout]: ", count_timeout);
      count_timeout++;
      console.error("Occurió un error [ApiAction]: ", error);
    }
    return onFailure(error);
  }
};

export const ApiDispatch = ({
  url = "",
  method = "",
  params = null,
  timeout,
  dispatch_type
}) => {
  return async dispatch => {
    try {
      dispatch(
        await ApiAction({
          url,
          method,
          params,
          timeout,
          onSuccess: data => {
            let payload = data;
            if (!Array.isArray(payload)) {
              payload = [payload];
            }
            if (dispatch_type) {
              return {
                type: dispatch_type,
                payload: payload
              };
            }
          }
        })
      );
    } catch (error) {
      console.log("[Error ApiDispatch]: ", error);
    }
  };
};
