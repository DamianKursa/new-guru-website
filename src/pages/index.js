import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image'

const ContentWrapper = styled.div`
  width:60%;
  text-align:right;
  height:calc(100vh - 210px);
  h1{
    font-size:78px;
  }
  p{
    font-size:22px;
  }
`
const ImageWrapper = styled(Image)`
  position:absolute !important;
  top:0;
  right:0;
  object-fit:cover;
  width:35%;
  height:100vh;
`
const IndexPage = ({data}) => (
  <main>
  <ContentWrapper>
    <h1>Guru-Utvikling</h1>
    <p>Hello this is our new Guru WEBSITE !!!</p>
  </ContentWrapper>
  </main>

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
