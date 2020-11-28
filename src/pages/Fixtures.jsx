import React from "react";
import Layout from "./Layout";
import MainContent from "./components/Fixtures/MainContent";

//Functional Component
export default function Fixtures() {
  return (
    <div>
      <Layout>
        <MainContent></MainContent>
      </Layout>
    </div>
  );
}
