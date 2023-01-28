import {
  CartModal,
  ModalHeader,
  ProductList,
  TotalPrice,
  FinalityButton,
  CloseButton,
  ModalContainer,
} from "./styles/styles.cart";
import { useAppSelector } from "@store/hooks/hooks";
import type { Cart } from "@store/types/index";
import type { RootState } from "@store/store";
import ItemCart from "./ProductInToCart";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartModalProps) {
  const cart = useAppSelector((state: RootState) => state.cartSlice.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (acc: number, item: Cart) =>
        acc + item.quantity * Number(item.product.price),
      0
    );
  };
  const priceFormatterCart = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

  return (
    <>
      {isOpen ? (
        <CartModal
          data-testid="cart-open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <ModalContainer>
            <ModalHeader>
              <div id="Title">
                <h1>Carrinho de Compras</h1>
              </div>
              <CloseButton onClick={onClose}>X</CloseButton>
            </ModalHeader>

            <ProductList>
              {cart.length == 0 ? null : (
                <>
                  {cart.map((cart: Cart) => (
                    <ItemCart
                      key={cart.product.id}
                      product={cart.product}
                      quantity={cart.quantity}
                    />
                  ))}
                </>
              )}
            </ProductList>
          </ModalContainer>

          <TotalPrice>
            <h1>Total:</h1>
            <h1>{priceFormatterCart.format(getTotalPrice())}</h1>
          </TotalPrice>

          <FinalityButton>
            <h1>Finalizar Compra</h1>
          </FinalityButton>
        </CartModal>
      ) : null}
    </>
  );
}
