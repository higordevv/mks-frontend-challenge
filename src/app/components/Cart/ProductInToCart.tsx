import Image from "next/image";

import FormatePrice from "@app/utils/format_price";
import {
  Price,
  ProductCart,
  Quantity,
  QuantityControls,
  RemoveProduct,
  ProductName,
} from "./styles/styles.product_in_to_cart";
import { Cart } from "@store/types/index";
import { useAppDispatch } from "@store/hooks/hooks";

import {
  decrementItemFromCart,
  incrementItemFromCart,
  removeFromCart,
} from "@store/features/cartSlice/index";

export default function ProductInToCart(item: Cart) {
  const dispath = useAppDispatch();

  return (
    <>
      <ProductCart key={item.product.id.toString()} data-testid="product_id">
        <Image
          loader={() => item.product.photo}
          src={item.product.photo}
          alt="product_img"
          width={46}
          height={57}
          priority
        />
        <ProductName>
          <h1 data-testid="product_name">{item.product.name}</h1>
        </ProductName>

        <Quantity>
          <QuantityControls>
            <span>Qtd:</span>
            <div>
              <button
                data-testid="decrement-button"
                onClick={() =>
                  dispath(decrementItemFromCart({ ...item.product }))
                }
              >
                -
              </button>
              <span data-testid="quantity">{item.quantity}</span>
              <button
                data-testid="increment-button"
                onClick={() =>
                  dispath(incrementItemFromCart({ ...item.product }))
                }
              >
                +
              </button>
            </div>
          </QuantityControls>

          <Price data-testid="price">
            {FormatePrice(item.quantity, item.product.price)}
          </Price>
        </Quantity>

        <RemoveProduct
          data-testid="remove-button"
          onClick={() => dispath(removeFromCart({ ...item.product }))}
        >
          X
        </RemoveProduct>
      </ProductCart>
    </>
  );
}
