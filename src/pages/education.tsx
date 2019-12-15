import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const EducationPage: React.FC = () => (
  <Layout>
    <SEO title="Education" />
    <Helmet>
        <title>Education</title>
    </Helmet>

    <h1>Education</h1>

  </Layout>
)

export default EducationPage