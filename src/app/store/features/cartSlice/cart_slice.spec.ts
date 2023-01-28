import cartSlice from "./index";
import { CartState, Product } from "../../types";

const ProductExample: Product = {
  id: 1,
  name: "Iphone 11 128 GB",
  brand: "Apple",
  description:
    "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
  price: 5000.0,
};

const ProductExampleTwo: Product = {
  id: 6,
  name: "iPad",
  brand: "Apple",
  description:
    "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
  photo:
    "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
  price: 4200.0,
};

describe("addToCart", () => {
  it("Should add a product to the cart", () => {
    const initialState: CartState = { cart: [] };

    const action = { type: "cart/addToCart", payload: ProductExample };
    const nextState = cartSlice(initialState, action);
    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0]).toEqual({ product: ProductExample, quantity: 1 });
  });

  it("Should increase the quantity if the product already exists in the cart", () => {
    const initialState: CartState = {
      cart: [
        {
          product: ProductExample,
          quantity: 1,
        },
      ],
    };
    const productExist = ProductExample;
    const action = { type: "cart/addToCart", payload: productExist };
    const nextState = cartSlice(initialState, action);
    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0]).toEqual({
      product: ProductExample,
      quantity: 2,
    });
  });
});

describe("removeFromCart", () => {
  it("Should remove an item from cart", () => {});
  const initialState: CartState = {
    cart: [
      {
        product: ProductExample,
        quantity: 1,
      },
      {
        product: ProductExampleTwo,
        quantity: 2,
      },
    ],
  };
  const productToBeRemoved = ProductExample;
  const action = { type: "cart/removeFromCart", payload: productToBeRemoved };
  const nextState = cartSlice(initialState, action);
  expect(nextState.cart).toHaveLength(1);
  expect(nextState.cart[0]).toEqual({
    product: ProductExampleTwo,
    quantity: 2,
  });
});

describe("incrementItemFromCart", () => {
  it("Should increment a product to the cart", () => {
    const initialState: CartState = {
      cart: [
        {
          product: ProductExample,
          quantity: 2,
        },
      ],
    };
    const productToBeIncremented = ProductExample;
    const action = {
      type: "cart/incrementItemFromCart",
      payload: productToBeIncremented,
    };
    const nextState = cartSlice(initialState, action);
    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0]).toEqual({ product: ProductExample, quantity: 3 });
  });
});

describe("decrementItemFromCart", () => {
  it("Should decrement a product to the cart", () => {
    const initialState: CartState = {
      cart: [{ product: ProductExample, quantity: 2 }],
    };
    const productToBeDecremented = ProductExample;
    const action = {
      type: "cart/decrementItemFromCart",
      payload: productToBeDecremented,
    };
    const nextState = cartSlice(initialState, action);
    expect(nextState.cart).toHaveLength(1);
    expect(nextState.cart[0]).toEqual({ product: ProductExample, quantity: 1 });
  });
  it("Should remove a product from the cart if quantity is 1", () => {
    const initialState: CartState = {
      cart: [{ product: ProductExample, quantity: 1 }],
    };
    const action = {
      type: "cart/decrementItemFromCart",
      payload: ProductExample,
    };
    const nextState = cartSlice(initialState, action);
    expect(nextState.cart).toHaveLength(0);
    expect(nextState).toEqual({ cart: [] });
  });
});
