import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image'
import { Container,Row,Col } from "react-bootstrap"
import ReactFullpage from '@fullpage/react-fullpage';

const MainPageWrapper = styled(Container)`
  display:flex;
  height:100vh;
  justify-content:center;
  align-items:center;
  background-image:url('/clay-banks.jpg');
  background-size:cover;
`
const TextColorChange = styled.span`
  color:#87BDCB;
`
const StyledPara = styled.p`
  color:#5E6061;
  font-size:1.2rem;
  text-align:left;
  margin-top: 1rem;
  @media (max-width: 487px) {
    font-size:1rem;
  }
`
const HeaderTitle = styled.h1`
  font-weight:700;
  font-size:2.5rem;
  text-align:left;
  padding:0;
  margin:0;
  color:#478094;
  @media (max-width: 487px) {
    font-size:2rem;
  }
`
const CTAButton = styled.button`
  background-color:#E2A05F;
  color:#fff;
  outline:none;
  border: 1px solid #E2A05F;
  text-transform:uppercase;
  font-size: 0.8rem;
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

const MainPageWrapperLatestWork =styled(Container)`
  background-color:#478094;
`
const MainPageWrapperBlog =styled(Container)`
  background-color:#fff;
`
const MainPageWrapperServices =styled(Container)`
  background-color:#E2A05F;
`

const IndexPage = () => (

  <ReactFullpage
    //fullpage options
    scrollingSpeed = {600}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section ">
          <MainPageWrapper className="scroll-secions" fluid>
              <Row>
                <StyledMainTextColumn xs={{span:10,offset:1}}>
                  <HeaderTitle>Vi hjelper deg gjennom den <TextColorChange>digitale skogen!</TextColorChange></HeaderTitle>
                  <StyledPara>Vi blir kjent med dine styrker og svakheter i din digitale synlighet. Vi blir enige om hvor vårt samarbeid skal ha fokus.</StyledPara>
                  <CTAButton>Les mer</CTAButton>
                </StyledMainTextColumn>
              </Row>
            </MainPageWrapper>
          </div>
          <div className="section">
            <MainPageWrapperLatestWork className="scroll-secions" fluid>
              <Row>
                <h1>LatestWork</h1>
              </Row>
            </MainPageWrapperLatestWork>
          </div>

          <div className="section">
            <MainPageWrapperBlog className="scroll-secions" fluid>
              <Row>
                <h1>Blog</h1>
              </Row>
            </MainPageWrapperBlog>
          </div>

          <div className="section">
            <MainPageWrapperServices className="scroll-secions" fluid>
              <Row>
                <h1>Services</h1>
              </Row>
            </MainPageWrapperServices>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  /*
 */
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
