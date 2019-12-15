import { Link } from "gatsby"
import React from "react"
import Image from "../components/sidebar/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Helmet>
        <title>About</title>
    </Helmet>

    <h1>About</h1>

  </Layout>
)

export default AboutPage