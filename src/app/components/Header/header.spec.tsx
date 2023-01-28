import { fireEvent, getByTestId, screen } from "@testing-library/react";

import Header from "./Header";
import { renderWithProviders } from "@utils/test-utils";

describe("<Header />", () => {
  it("Renders without crashing", () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId("title-header")).toBeTruthy();
  });

  it("Displays the correct number of items in the cart", () => {
    const { getByText } = renderWithProviders(<Header />);
    const cartCount = getByText("0");
    expect(cartCount).toBeTruthy();
  });

  it("opens the cart modal when the cart button is clicked", () => {
    const { getByText, container } = renderWithProviders(<Header />);
    const cartButton = getByText("0");
    fireEvent.click(cartButton);

    const cartModal = getByTestId(container, "cart-modal");
    expect(cartModal).toBeTruthy();
  });

  it("integrates correctly with store", () => {
    const { getByText } = renderWithProviders(<Header />);
    const cartCount = getByText("0");
    expect(cartCount).toBeTruthy();
  });
});
