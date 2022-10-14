import { Outlet } from "react-router-dom";
import Header from '../components/Header.js'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
};

export default Layout;