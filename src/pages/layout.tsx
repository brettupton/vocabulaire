import { useState, useEffect, createContext } from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const MobileContext = createContext(false)

export const Layout = () => {

  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <MobileContext.Provider value={isMobile}>
      <Navbar />
      <Outlet />
    </MobileContext.Provider>
  )
}

