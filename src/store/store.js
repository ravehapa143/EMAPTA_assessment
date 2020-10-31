import { createStore } from "redux";

import { rootReducer } from "./rootDuck";

const store = createStore(
  rootReducer,
);

export default store;
