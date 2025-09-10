import Navbar from "./Navbar"
import Hero from "./Hero"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"

const Layout =() =>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;