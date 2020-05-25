import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: white;
`
const NavigationWrapper = styled.nav`
    align-items:center;
    display:flex;
    flex-direction:row;
    padding:2rem;
    justify-content:flex-start;
    align-items:baseline;
    font-family: 'Montserrat';
    background-color:#2e89a5;
    position:absolute;
    width:100%;
    top:0;
    left:0;
    z-index:9999;
`
const NavigationList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:0;
`
const NavigationListItem = styled.li`
    padding:1rem;
    text-decoration:none;
    color:white;
    font-weight:700;
`
const Logo = styled.h1`
    font-weight:700;
    font-size:2rem;
    color:white;
    margin:0;
`
const Navigation = () => (
    <NavigationWrapper>
        <Logo>GURU</Logo>
        <NavigationList>
            <NavigationListItem>
                <StyledLink to='/'>home</StyledLink>
            </NavigationListItem>
            <NavigationListItem>
                <StyledLink to='/about'>about</StyledLink>
            </NavigationListItem>
            <NavigationListItem>
                <StyledLink to='/gallery'>gallery</StyledLink>
            </NavigationListItem>
            <NavigationListItem>
                <StyledLink to='/articles'>articles</StyledLink>
            </NavigationListItem>
            <NavigationListItem>
                <StyledLink to='/contact'>contact</StyledLink>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
  )
  
  export default Navigation
  