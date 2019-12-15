import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.li`
  text-align: center;
`

const StyledLink = styled(Link)`
  font-family: "Courier New";
  font-size: 12pt;
  text-transform: uppercase;
  color: black;
`

interface IMenuItemProps {
  pageName: string
  to: string
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <Container>
      <StyledLink to={props.to} activeStyle={{ fontWeight: "bold" }}>
        {props.pageName}
      </StyledLink>
    </Container>
  )
}

export default MenuItem
