import React, { ReactNode } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.li`
  text-align: center;
`

const StyledSpan = styled.span`
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
      <Link to={props.to} style={{textDecorationColor: "black"}}>
        {document.title.split(" ")[0] === props.pageName ? (
          <StyledSpan>
            <b>{props.pageName}</b>
          </StyledSpan>
        ) : (
          <StyledSpan>{props.pageName}</StyledSpan>
        )}
      </Link>
    </Container>
  )
}

export default MenuItem
