"use client";
import { Container, ContainerCards } from "./styles";
import { useGetProductsQuery } from "@service/products";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  orderBy,
  ParamProductRequest,
  sortBy,
  Product,
} from "@store/types/index";
import Cards from "../Cards";

export default function CardGrid() {
  const productQuery: ParamProductRequest = {
    page: 1,
    rows: 8,
    sortBy: sortBy.id,
    orderBy: orderBy.DESC,
  };
  const { data, isLoading } = useGetProductsQuery(productQuery);

  return (
    <div>
      <Container>
        <ContainerCards>
          {data?.products.map((product: Product) => (
            <Cards
              key={product.id}
              product={product}
              loading={isLoading ? true : false}
            />
          ))}
        </ContainerCards>
      </Container>

      {/* <Footer /> */}
    </div>
  );
}
