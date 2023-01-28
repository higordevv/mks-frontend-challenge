import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RootReducer from "./features/rootReducer";
import React from "react";
import { ProductsApi } from "./service/products";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const AppStoreConfig = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ProductsApi.middleware),
    preloadedState,
  });
};
export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof AppStoreConfig>;
export type AppDispatch = AppStore["dispatch"];

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  setupListeners(AppStoreConfig().dispatch);
  return <Provider store={AppStoreConfig()}>{children}</Provider>;
}
