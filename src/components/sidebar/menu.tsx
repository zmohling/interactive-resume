import React from "react"
import styled from "styled-components"
import MenuItem from "./menu-item"

const MenuContainer = styled.div`
  flex-grow: 4;
`

const MenuList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export default () => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem pageName="About" to="/about/" />
        <MenuItem pageName="Education" to="/education/" />
        <MenuItem pageName="Experience" to="/experience/" />
        <MenuItem pageName="Projects" to="/projects/" />
        <MenuItem pageName="Contact" to="/contact/" />
      </MenuList>
    </MenuContainer>
  )
}
