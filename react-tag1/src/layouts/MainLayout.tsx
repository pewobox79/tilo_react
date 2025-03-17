import { ReactElement, ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

type MainLayoutType ={
    children: ReactElement[] | ReactElement | ReactNode
}


const MainLayout = ({children}:MainLayoutType) => {
    return <div>
            <Header/>
            {children}
            <Footer/>
        </div>
}

export default MainLayout
