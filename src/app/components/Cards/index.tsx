"use client";

import Image from "next/image";
import Bag from "./assets/bag.svg";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  CardDescription,
  CardFooter,
  CardButton,
  CardMain,
} from "./styles";
import { Product } from "@store/types/index";

import { useAppDispatch } from "@store/hooks/hooks";
import { addToCart } from "@store/features/cartSlice";
import Skeleton from "react-loading-skeleton";

interface CardProps {
  product: Product;
  loading: boolean;
}
export default function Cards({ product, loading = true }: CardProps) {
  const dispatch = useAppDispatch();

  const priceFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

  return (
    <>
      {loading ? (
        <Skeleton width={217.56} count={5} height={285} />
      ) : (
        <Card key={product.id.toString()}>
          <CardMain>
            <CardImage>
              <Image
                loader={() => product.photo}
                src={product.photo}
                alt=""
                width={100}
                height={100}
              />
            </CardImage>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <CardPrice>
                <span>R${product.price}</span>
              </CardPrice>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardButton
                data-testid="add-cart"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                    })
                  )
                }
              >
                <Image src={Bag} alt="bag" width={12} height={13.5} />
                Comprar
              </CardButton>
            </CardFooter>
          </CardMain>
        </Card>
      )}
    </>
  );
}
