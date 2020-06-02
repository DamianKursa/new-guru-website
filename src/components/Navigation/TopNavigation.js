import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container,Row,Col,Navbar } from 'react-bootstrap'
import Logo from '../../assets/images/guru-utvikling-logo.svg'
import BookingIcon from '../../assets/images/booking-icon.svg'
const GuruLogo = styled(Logo)`
    padding:0;
    margin:0;
`
const TopNavbarContainer = styled(Navbar)`
    padding:0;
    -webkit-box-shadow: 0px 6px 6px 0px rgba(209,209,209,.3);
    -moz-box-shadow: 0px 6px 6px 0px rgba(209,209,209,.3);
    box-shadow: 0px 6px 6px 0px rgba(209,209,209,.3);
    background:white;
    @media (min-width: 992px) {box-shadow:none;}
    @media (min-width: 1200px) {box-shadow:none; }

`
const MeetingButton = styled.button`
    background-color:#E2A05F;
    outline:none;
    border:none;
    height:45px;
    width:70px;
`
const BookingButtonWrapper = styled(Col)`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
const TopNavigation = () => (
    <Container>
        <TopNavbarContainer fixed='top' >
        <Col>
            <Link>
                <GuruLogo/>
            </Link>
        </Col>
        <BookingButtonWrapper>
            <MeetingButton>
                <BookingIcon/>
            </MeetingButton>
        </BookingButtonWrapper>
        </TopNavbarContainer>


    </Container>
  )
  
  export default TopNavigation
  