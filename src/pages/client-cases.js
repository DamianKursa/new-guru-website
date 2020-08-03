import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import ArticlesPreview from '../components/ArticlesPreview/Articlespreview'

const ArticlesWrapperPage = styled.div`
  display: flex;
  justify-items:center;
  align-items:center;
  height:100vh;
`

const clientCases = () => {
  //const {allDatoCmsArticle:{nodes}} = data
  return(
    <ArticlesWrapperPage>
    <h1>all articles</h1>
    </ArticlesWrapperPage>
  )
  }
 /* export const query = graphql`
    { allDatoCmsArticle {
      nodes {
        id
        title
        slug
        postImage {
          fluid(maxWidth: 400, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }` */
  export default clientCases
  