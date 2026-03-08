
import {Header} from "./Header"
import { Outlet } from "react-router-dom"
import {Footer} from "./Footer"

const MainLayout = () => {
  return (
    <main className="MainPage">
        <Header/>
        <Outlet/>
        <Footer/>

    </main>
  )
}

export default MainLayout