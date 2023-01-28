"use client";

import React, { useState } from "react";
import Image from "next/image";

import { RootState } from "@app/store/store";
import { Cart } from "@app/store/types";
import { useAppSelector } from "@store/hooks/hooks";

import CartModal from "../Cart/Cart";
import { Conatiner, Button, Title } from "./styles/stylesHeader";

import CartIcon from "./assets/cart_icon.svg";

function Header() {
  const { cart } = useAppSelector((state: RootState) => state.cartSlice);

  const total = cart.reduce(
    (acc: number, item: Cart) => acc + item.quantity,
    0
  );

  const [isOpenCart, setIsOpenCart] = useState(false);

  function handleOpenCartModal() {
    setIsOpenCart(true);
  }
  function handleCloseCartModal() {
    setIsOpenCart(false);
  }
  return (
    <Conatiner>
      <Title data-testid="title-header">
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </Title>
      <Button onClick={handleOpenCartModal} data-testid="cart-modal">
        <Image src={CartIcon} alt="cart_icon" id="icon" />
        <p>{total}</p>
      </Button>
      <CartModal isOpen={isOpenCart} onClose={handleCloseCartModal} />
    </Conatiner>
  );
}

export default Header;
