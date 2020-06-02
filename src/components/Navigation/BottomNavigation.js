import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import HamburgerIcon from '../../assets/images/menu-hamburger.svg'
import PhoneIcon from '../../assets/images/phone-icon.svg'
import LocationIcon from '../../assets/images/location-mark.svg'
import MailIcon from '../../assets/images/mail-icon.svg'
import HomeIcon from '../../assets/images/home-icon.svg'
const NavbarContainer = styled(Navbar)`
background-color:#478094;
height:55px;
`
const HomeIconWrapper = styled(HomeIcon)`
  margin-bottom:2rem;
`
const BottomNavigation = () => (
    <Container xs={12}>
      <NavbarContainer fixed="bottom">
        <Col>
        <Link>
          <HamburgerIcon width={24} />
        </Link>
        </Col>
        <Col>
          <Link>
            <PhoneIcon width={24} />
          </Link>
        </Col>
        <Col xs={4}>
         <Link>
          <HomeIconWrapper/>
         </Link>
        </Col>
        <Col>
          <Link>
            <LocationIcon width={24}/>
          </Link>
        </Col>
        <Col>
          <Link>
            <MailIcon />
          </Link>
        </Col>
      </NavbarContainer>
    </Container>
  )
  
  export default BottomNavigation
  