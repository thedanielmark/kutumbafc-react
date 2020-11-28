import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import MainContent from "./components/Profile/MainContent";

export default function Merch() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Merch | Pattarai</title>
        </Helmet>
        {/* <MainContent></MainContent> */}
      </Layout>
    </HelmetProvider>
  );
}