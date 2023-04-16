import { useState, useEffect, createContext } from 'react'
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import Cookies from 'js-cookie'

export const MobileContext = createContext(false)

export const Layout = () => {

  // Mobile Context
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

  //Token check
  const userToken = Cookies.get('token')

  useEffect(() => {
    fetch('https://vocabulairehost.onrender.com/token/validate', {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + userToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          localStorage.removeItem('user')
          localStorage.removeItem('userRole')
          Cookies.remove('token')
        }
      })
  }, [])

  return (
    <MobileContext.Provider value={isMobile}>
      <Navbar />
      <Outlet />
    </MobileContext.Provider>
  )
}

