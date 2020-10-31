import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetProducts: "[SetProducts] Action",
};

let initial_items = JSON.stringify([{id: 1, name: "Apple"}]);

const initialItemsState = {
  products: initial_items,
};

export const reducer = persistReducer(
  { storage, key: "commerce", whitelist: ["products"] },
  (state = initialItemsState, action) => {
    switch (action.type) {
      case actionTypes.SetProducts: {
        const { products } = action.payload;

        return { ...state, products };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  setProducts: products => ({ type: actionTypes.SetProducts, payload: { products } }),
};
