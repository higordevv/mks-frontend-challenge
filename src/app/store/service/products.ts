import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  ParamProductRequest,
  ProductResponseRequest,
} from "@store/types/index";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-challenge-api-frontend.herokuapp.com/api/v1",
  }),
  endpoints: (build) => ({
    getProducts: build.query<ProductResponseRequest, ParamProductRequest>({
      query: ({ page, rows, sortBy, orderBy }) =>
        `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
    }),
  }),
});

export const { useGetProductsQuery } = ProductsApi;
