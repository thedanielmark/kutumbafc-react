import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import MainContent from "./components/Profile/MainContent";

export default function TermsOfService() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Terms of Service</title>
        </Helmet>
        {/* <MainContent></MainContent> */}
      </Layout>
    </HelmetProvider>
  );
}
