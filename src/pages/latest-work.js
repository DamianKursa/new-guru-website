import React from "react"
import { graphql, useStaticQuery,Link } from "gatsby"
import styled from "styled-components"


const clientCases = ({data}) => {
  const {allDatoCmsLatestWork:{nodes}} = data
  const LatestWorkWrapper= styled.div`
    margin: 10rem;
  `
  return(
    <LatestWorkWrapper>
      <h1> Our latest work</h1>
      {nodes.map(({latestWorkLink,latestWorkImage,id})=>( 
        <a key={id} href={latestWorkLink}>
          <img height={200} width={200} src={latestWorkImage.fluid}/>
        </a>
      ))} 
    </LatestWorkWrapper>
  )}

  export const query = graphql`
    {allDatoCmsLatestWork {
    nodes {
      id
      latestWorkLink
      latestWorkImage {
        fluid{
              ...GatsbyDatoCmsFluid
            }
      }
    }
  }
    }`
  export default clientCases
  