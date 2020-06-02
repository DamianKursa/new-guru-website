import React from "react"
import TopNavigation from '../components/Navigation/TopNavigation'
import BottomNavigation from '../components/Navigation/BottomNavigation'
import GlobalStyle from '../assets/styles/globalStyles'
const MainLayout = ({children}) => (
    <main >
      <GlobalStyle />
      <TopNavigation />
      {children}
      <BottomNavigation />
    </main>
  )

  export default MainLayout
  