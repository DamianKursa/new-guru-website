import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '../../assets/images/menu-hamburger.svg'
import Menu from '../Menu/Menu'

const StyledMenuIcon = styled(MenuIcon)`
    stroke:#4E4C4C;
    width: 32px;
    height:32px;
    margin-left:2rem;
    @media (max-width:478px){
        stroke:#fff;
        width: 24px;
        margin-left:0;
    }
`
const Hamburger = () => {

  const [open, setOpenMenu] = useState(false)
  return (
    <> 
      <StyledMenuIcon  open={open} onClick={() => setOpenMenu(!open)}/>
      <Menu open={open}/> 
    </>
  )
}

export default Hamburger
