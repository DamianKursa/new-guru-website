import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Container,Col,Navbar,Nav,Link } from 'react-bootstrap'
import Logo from '../../assets/images/guru-utvikling-logo.svg'
import Hamburger from './Hamburger'
import MenuIcon from '../../assets/images/menu-hamburger.svg'
import BookMeetingButton from '../Navigation/BookMeetingButton'
/*STYLES*/
const GuruLogo = styled(Logo)`
    padding:0;
    margin:0;
    @media (max-width: 692px){
        width: 100px;
        height:34px;
    }
`
const HamburgerWrapperDesktop = styled.div`
    @media (max-width: 992px){
        display:none
    }
`
const StyledMenuIcon = styled(MenuIcon)`
    stroke:#4E4C4C;
    width: 32px;
    height:32px;
    margin-left:2rem;
    @media (max-width: 992px){
        display:none
    }
`
const GuruLogoWraper = styled(Col)`
    display:flex;
`
const TopNavbarContainer = styled(Container)`
    padding:0;
    background:rgba(255,255,255,0.9);
    position:absolute;
    top:0;

`
const StyledNavigation = styled(Nav)`
   justify-content:flex-end;
   align-items:baseline;
`
/*METHODS*/

const TopNavigation = (props) => {

    return(
        <>
        <TopNavbarContainer fluid>
            <Navbar  sticky="top" bg="white">
                <GuruLogoWraper>
                    <Navbar.Brand  href="#">
                        <GuruLogo></GuruLogo>
                    </Navbar.Brand>
                </GuruLogoWraper>
                <Col>
                    <StyledNavigation>
                        <Nav.Link href="#">
                            <BookMeetingButton/>
                        </Nav.Link>
                    </StyledNavigation>
                </Col>
                <HamburgerWrapperDesktop>
                    <Hamburger/>
                </HamburgerWrapperDesktop>

            </Navbar>
        </TopNavbarContainer>

        </>
        )
}
 
  export default TopNavigation
  