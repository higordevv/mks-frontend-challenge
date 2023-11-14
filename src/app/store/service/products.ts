import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  ParamProductRequest,
  ProductResponseRequest,
} from "@store/types/index";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  }),
  endpoints: (build) => ({
    getProducts: build.query<ProductResponseRequest, ParamProductRequest>({
      query: ({ page, rows, sortBy, orderBy }) =>
        `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
    }),
  }),
});

export const { useGetProductsQuery } = ProductsApi;
