import React from "react"
import TopNavigation from '../components/Navigation/TopNavigation'
import BottomNavigation from '../components/Navigation/BottomNavigation'
import GlobalStyle from '../assets/styles/globalStyles'
import {useSpring, animated} from 'react-spring'

const MainLayout = ({children}) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return(
    <animated.main style={props}>
    <GlobalStyle />
    <TopNavigation />
    {children}
    <BottomNavigation />
  </animated.main>
  )}




  export default MainLayout
  