import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Section
import Home from "../section/home/home";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
