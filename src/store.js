import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import AddtoCartReducer from "./features/addToCart/addToCartSlice";
import CartStateReducer from "./features/addToCart/cartStateSlice";
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    AddToCart: AddtoCartReducer,
    CartToggleState: CartStateReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
