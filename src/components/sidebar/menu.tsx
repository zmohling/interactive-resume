import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  flex-grow: 4;
`

const MenuList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  text-align: center;
`

const StyledLink = styled.a`
  font-family: "Courier New";
  font-size: 12pt;
  text-decoration: underline;
  text-transform: uppercase;
`

export default () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <StyledLink>About</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink>Education</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink>Experience</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink>Projects</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink>Contact</StyledLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  )
}
