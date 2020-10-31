import { combineReducers } from "redux";

import * as items from "./ducks/items.duck";
import * as commerce from "./ducks/commerce.duck";

export const rootReducer = combineReducers({
  items: items.reducer,
  commerce: commerce.reducer
});