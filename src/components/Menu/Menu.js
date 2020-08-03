import React from 'react'
import styled from 'styled-components'
import { Container,Nav,Col } from 'react-bootstrap'
import BookMeetingButton from '../Navigation/BookMeetingButton'

const MenuWrapper = styled.div`
  background-color:rgba(255, 255, 255 , 0.9);
  z-index:9999;
  position: fixed;
  top:0;
  left:0;
  color:red;
  width:100vw;
  height:100vh;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  @media (max-width:478px){

    }
`
const StyledNavLink= styled(Nav.Link)`
  color:#478094;
  font-weight:900;
  font-size:3rem;
  text-align:end;
  @media (max-width:478px){
    font-size:2rem;
    text-align:start;
    }
`
const StyledNavigationMenu = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:100vh;
  width:50%;
  @media (max-width:478px){
    width:100%;
  }
`
const Menu = ({open}) => {
  return (
    <MenuWrapper open={open} >
      <Col xs={12} md={{ span: 4, offset:5 }} lg={12}>
      <StyledNavigationMenu>
          <StyledNavLink href="/">Guru</StyledNavLink>
          <StyledNavLink href="#">Projects</StyledNavLink>
          <StyledNavLink href="#">What we do</StyledNavLink>
          <StyledNavLink href="/client-cases">Clients cases</StyledNavLink>
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
