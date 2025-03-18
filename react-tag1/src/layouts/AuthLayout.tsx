import { Outlet } from "react-router"

const AuthLayout = ({ children, user }) => {

    if(children && user) {
        return <>{children}</>
    }
    if(user) return <Outlet/>

    return <h1>access denied</h1>
    }

   

        export default AuthLayout
