import React from "react"
import TopNavigation from '../components/Navigation/TopNavigation'
import BottomNavigation from '../components/Navigation/BottomNavigation'
import GlobalStyle from '../assets/images/styles/globalStyles'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const MainLayout = ({children}) => (
    <main >
      <GlobalStyle />
      <TopNavigation />
      {children}
      <BottomNavigation />
    </main>
  )

  export default MainLayout
  