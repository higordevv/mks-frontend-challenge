"use client";

import Head from "next/head";
import { Header, Main } from "./components/index";
import StoreProvider from "./store/store";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <StoreProvider>
        <Header />
        <Main />
        <footer></footer>
      </StoreProvider>
    </>
  );
}
