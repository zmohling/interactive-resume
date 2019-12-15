import { Link } from "gatsby"
import React from "react"
import Image from "../components/sidebar/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const ProjectsPage: React.FC = () => (
  <Layout>
    <SEO title="Projects" />
    <Helmet>
        <title>Projects</title>
    </Helmet>

    <h1>Projects</h1>

  </Layout>
)

export default ProjectsPage