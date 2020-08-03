import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
const GlobalStyle = createGlobalStyle`
    html{
        box-sizing:border-box;
    }
    *,
    *::before,
    *::after{
        box-sizing:inherit
    }
    body{
        
        font-family:'Proxima Nova';
        text-align:center;
    }
    button{
        padding:0;
        cursor: pointer;
        font-family:'Proxima Nova'
    }
    ul{
        padding:0;
        margin:0;
    }
    a{
        text-decoration:none;
    }
    .scroll-secions{
        height:100vh;
        /*padding:5rem 1rem 1rem 1rem;*/
        display:flex;
        align-items:center;

    }
    .simple-trans-main > div {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 25em;
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
}

`

export default GlobalStyle