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
`

export default GlobalStyle