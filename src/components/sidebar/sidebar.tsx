import React from "react"
import styled from "styled-components"
import Profile from './profile'
import Menu from './menu'

interface ISidebarProps {
  currPage: string
}

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 25vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  background-color: #fdf5e8;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

  z-index: 100;
`

const Sidebar: React.FC<ISidebarProps> = (props: ISidebarProps) => {
  return (
    <>
      <Container>
        <Profile />
        <Menu />
        {/* <h2>{props.currPage}</h2> */}
      </Container>
    </>
  )
}

export default Sidebar
