import { Outlet } from "react-router"
import AuthLayout from "./AuthLayout"
import LogoutButton from "../components/globals/LogoutButton"

const DashboardLayout = () => {


    return (
        <div style={{
            border: "1px solid red",
            minHeight: 500,
            height: "auto",
            backgroundColor: "lightblue"
        }}>
            <LogoutButton />
            <AuthLayout>
                <Outlet />
            </AuthLayout>
        </div>
    )
}

export default DashboardLayout
