import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image'
import { Container,Row,Col } from "react-bootstrap"

const MainPageWrapper = styled(Container)`
  height:100vh;

  display:flex;
  justify-content:center;
  align-items:center;
`
const TextColorChange = styled.span`
  color:#87BDCB;
`
const StyledPara = styled.p`
  color:#5E6061;
  font-size:14px;
  text-align:left;
  margin-top: 1rem;
`
const HeaderTitle = styled.h1`
  font-weight:700;
  font-size:25px;
  text-align:left;
  padding:0;
  margin:0;
  color:#478094;
`
const CTAButton = styled.button`
  background-color:white;
  color:#E2A05F;
  outline:none;
  border: 1px solid #E2A05F;
  text-transform:uppercase;
  font-size: 12px;
  width:150px;
  height:45px;
  font-weight:bold;
  margin-top:.3rem;
`
const StyledMainTextColumn = styled(Col)`
  justify-content:flex-start;
  display:flex;
  flex-direction:column;
`
const IndexPage = () => (
  <MainPageWrapper>
    <Row>
      <StyledMainTextColumn xs={{span:10,offset:1}}>
        <HeaderTitle>Vi hjelper deg gjennom den <TextColorChange>digitale skogen!</TextColorChange></HeaderTitle>
        <StyledPara>Vi blir kjent med dine styrker og svakheter i din digitale synlighet. Vi blir enige om hvor vårt samarbeid skal ha fokus.</StyledPara>
        <CTAButton>Les mer</CTAButton>
      </StyledMainTextColumn>

    </Row>
  </MainPageWrapper>
)

/*export const query = graphql`
  {
    file(name: {eq: "clay-banks"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`*/
export default IndexPage
