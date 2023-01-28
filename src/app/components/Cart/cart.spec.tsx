import { screen } from "@testing-library/react";

import Cart from "./Cart";
import { renderWithProviders } from "@utils/test-utils";

describe("<Cart />", () => {
  it("Renders without crashing", () => {
    renderWithProviders(
      <Cart
        isOpen={true}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("cart-open")).toBeTruthy();
  });

  it("Displays the correct number of items in the cart", () => {
    const { getByText } = renderWithProviders(
      <Cart
        isOpen={true}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const TotalItems = getByText("R$ 0");
    expect(TotalItems).toBeTruthy();
  });
});
