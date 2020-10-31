import { combineReducers } from "redux";

import * as items from "./ducks/items.duck";

export const rootReducer = combineReducers({
  items: items.reducer
});