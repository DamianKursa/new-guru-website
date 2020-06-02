import React, { Fragment } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from 'gatsby-image'


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
