import React from 'react'
import styled from 'styled-components'
import { Container,Nav,Col } from 'react-bootstrap'
import BookMeetingButton from '../Navigation/BookMeetingButton'
const MenuWrapper = styled.div`
background-color:rgba(255, 255, 255 , 0.9);

width:100vw;
z-index:9999;
color:red;
position:absolute;
`
const StyledNavLink= styled(Nav.Link)`
  color:#478094;
  font-weight:900;
  font-size:3rem;
  text-align:end;
`
const StyledNavigationMenu = styled(Nav)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  height:90vh;
`
const Menu = () => {
  return (
    <MenuWrapper>
      <Col lg={{ span: 4, offset: 7 }}>
      <StyledNavigationMenu >
          <StyledNavLink href="#">Guru</StyledNavLink>
          <StyledNavLink href="#">Projects</StyledNavLink>
          <StyledNavLink href="#">What we do</StyledNavLink>
          <StyledNavLink href="#">Clients cases</StyledNavLink>
          <StyledNavLink href="#">Get in touch with us</StyledNavLink>
          <StyledNavLink href="#">
              <BookMeetingButton/>
          </StyledNavLink>
      </StyledNavigationMenu>
      </Col>

    </MenuWrapper>
  )
}

export default Menu
