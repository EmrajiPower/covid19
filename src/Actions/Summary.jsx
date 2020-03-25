import { FETCH_SUMMARY, FETCH_SUMMARY_BY_DAY } from "./types";
import { ApiDispatch } from "../Components/Api/index";

export const getSummary = () => {
  return ApiDispatch({
    url: "/api",
    method: "GET",
    dispatch_type: FETCH_SUMMARY,
    timeout: 5000
  });
};

export const getSummaryByDay = data => {
  return ApiDispatch({
    url: `/api/daily/${data}`,
    method: "GET",
    dispatch_type: FETCH_SUMMARY_BY_DAY,
    timeout: 5000
  });
};
