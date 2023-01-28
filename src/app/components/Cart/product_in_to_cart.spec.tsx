import ProductInToCart from "./ProductInToCart";
import { renderWithProviders } from "@utils/test-utils";
import { AppStoreConfig } from "@store/store";
import { Cart } from "@store/types/index";
import {
  addToCart,
  incrementItemFromCart,
  decrementItemFromCart,
  removeFromCart,
} from "@store/features/cartSlice";
import { screen } from "@testing-library/react";

describe("<ProductInToCart />", () => {
  const initalStateMock: Cart = {
    product: {
      id: 1,
      name: "Iphone 11 128 GB",
      brand: "Apple",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
      price: 5000.0,
    },
    quantity: 1,
  };

  const store = AppStoreConfig();

  beforeAll(() => {
    store.dispatch(addToCart({ ...initalStateMock.product }));
  });
  it("Renders without crashing", () => {
    renderWithProviders(
      <ProductInToCart product={initalStateMock.product} quantity={1} />
    );
    expect(screen.getAllByTestId("product_id")).toBeTruthy();
    expect(screen.findAllByAltText("product_img")).toBeTruthy();
    expect(screen.getAllByTestId("product_name")).toBeTruthy();
    expect(screen.getAllByTestId("quantity")).toBeTruthy();
    expect(screen.getAllByTestId("price")).toBeTruthy();
  });

  it("Increment the product to the cart", () => {
    const { cartSlice } = store.getState();
    renderWithProviders(
      <ProductInToCart
        product={cartSlice.cart[0].product}
        quantity={cartSlice.cart[0].quantity}
      />,
      { store }
    );
    screen.getByTestId("increment-button").click();
    expect(cartSlice.cart.length).toEqual(1);
    expect(cartSlice.cart[0].quantity).toEqual(1);
  });
  it("Decrement the product from the cart", () => {
    const { cartSlice } = store.getState();
    renderWithProviders(
      <ProductInToCart
        product={cartSlice.cart[0].product}
        quantity={cartSlice.cart[0].quantity}
      />,
      { store }
    );
    screen.getByTestId("decrement-button").click();
    store.dispatch(decrementItemFromCart(cartSlice.cart[0].product));

    expect(cartSlice.cart.length).toEqual(1);
    expect(cartSlice.cart[0].quantity).toEqual(2);
  });
  it("Remove the product from the cart", () => {
    const { cartSlice } = store.getState();
    renderWithProviders(
      <ProductInToCart
        product={initalStateMock.product}
        quantity={initalStateMock.quantity}
      />,
      { store }
    );
    screen.getByTestId("remove-button").click();
    expect(cartSlice.cart.length).toEqual(0);
  });
});
