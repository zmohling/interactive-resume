import React from "react"
import styled from "styled-components"
import Image from "./image"
import {Link} from "gatsby"

const ProfileContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-grow: 1;
`

const ImageContainer = styled.div`
  width: 40%;
  max-width: 100px;
  max-height: 100px;
  margin: 2vh auto;
`

const StyledHeader = styled.h1`
  padding: 0 2vw;
  margin: 1vh 0vw;

  font-weight: bold;
  font-size: 14pt;
  text-align: center;
`
const StyledSubheader = styled(StyledHeader)`
    font-weight: normal;
    font-size 12pt;
`
export default () => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>

      <StyledHeader>Zachary Mohling</StyledHeader>
      <StyledSubheader>An interactive résumé</StyledSubheader>
    </ProfileContainer>
  )
}
