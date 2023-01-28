import { combineReducers } from "@reduxjs/toolkit";
import { ProductsApi } from "@service/products";
import cartSlice from "./cartSlice";

const RootReducer = combineReducers({
  [ProductsApi.reducerPath]: ProductsApi.reducer,
  cartSlice,
});

export default RootReducer;
