import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { Product, CartState } from "../../types";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productExist = state.cart.find(
        ({ product }) => product?.id === action.payload.id
      );
      if (productExist) {
        productExist.quantity++;
      } else {
        state.cart.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.filter(
        ({ product }) => product?.id !== action.payload.id
      );
    },
    incrementItemFromCart: (state, action: PayloadAction<Product>) => {
      const product = state.cart.find(
        ({ product }) => product?.id === action.payload.id
      );
      if (product) product.quantity++;
    },
    decrementItemFromCart: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.filter((item) => {
        if (item.product?.id === action.payload.id) {
          if (item.quantity === 1) {
            return null;
          } else {
            item.quantity--;
            return item;
          }
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementItemFromCart,
  incrementItemFromCart,
} = cartSlice.actions;

export const selectCount = (state: RootState) => state.cartSlice;

export default cartSlice.reducer;
