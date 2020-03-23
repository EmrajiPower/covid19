import { combineReducers } from "redux";

import Summary from "./Summary";
import Language from "./Language";
import Country from "./Country";

export default combineReducers({
  Summary,
  Language,
  Country
});
