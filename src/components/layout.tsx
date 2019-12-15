/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { oc } from "ts-optchain"
import { SiteTitleQueryQuery } from "../graphqlTypes"
import "./layout.css"
import Helmet from "react-helmet"
import Sidebar from "./sidebar/sidebar"
import styled from "styled-components"

interface ILayoutProps {
  children: ReactNode
}

const MainContainer = styled.div`
  position: absolute;
  left: 25%;
  height: 100vh;
  width: 75vw;
  background-color: #fdf5e8;
`

const ContentContainer = styled.div`
  margin 0 auto;
  padding: 25vh 15vw;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export default (props: ILayoutProps) => {
  return (
    <React.Fragment>
        <Sidebar />
        <MainContainer>
          <ContentContainer>
          <main>{props.children}</main>
          </ContentContainer>
        </MainContainer>
    </React.Fragment>
  )
}
