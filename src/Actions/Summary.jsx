import { FETCH_SUMMARY } from "./types";
import { ApiDispatch } from "../Components/Api/index";

export const getSummary = () => {
  return ApiDispatch({
    url: "/api",
    method: "GET",
    dispatch_type: FETCH_SUMMARY,
    timeout: 5000
  });
};
