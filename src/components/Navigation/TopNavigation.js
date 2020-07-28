import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { Container,Col,Navbar,Nav,Link } from 'react-bootstrap'
import Logo from '../../assets/images/guru-utvikling-logo.svg'
import Menu from '../Menu/Menu'
import MenuIcon from '../../assets/images/menu-hamburger.svg'
import BookMeetingButton from '../Navigation/BookMeetingButton'
/*STYLES*/
const GuruLogo = styled(Logo)`
    padding:0;
    margin:0;
`
const StyledMenuIcon = styled(MenuIcon)`
    stroke:#4E4C4C;
    width: 32px;
    height:32px;
    margin-left:2rem;
`
const GuruLogoWraper = styled(Col)`
    display:flex;
`
const TopNavbarContainer = styled(Container)`
    padding:0;
    background:white;
    @media (max-width: 992px) {display:none;}

`
const StyledNavigation = styled(Nav)`
   justify-content:flex-end;
   align-items:baseline;
`
/*METHODS*/

const TopNavigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }

    return(
        <>
        <TopNavbarContainer fluid>
            <Navbar  sticky="top" bg="light">
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
                        <Nav.Link href="#">
                            <StyledMenuIcon onClick={toggleMenu}/>
                        </Nav.Link>
                    </StyledNavigation>
                </Col>
            </Navbar>
        </TopNavbarContainer>
        {showMenu ? <Menu/> : ''}
        </>
        )
}
 
  export default TopNavigation
  