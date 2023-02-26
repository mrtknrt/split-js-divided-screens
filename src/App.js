import React from "react";
import { Layout, Editor1 } from "./components";

export default function MyApp(Component, pageProps) {
  return (
    <Layout {...pageProps}>
      <Editor1 />
    </Layout>
  );
}
