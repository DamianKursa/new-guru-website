import { createGlobalStyle } from 'styled-components'

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
        
        margin-top:200px;
        font-family:'Montserrat';
        text-align:center;
    }
    button{
        padding:0;
        cursor: pointer;
        font-family:'Montserrat'
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