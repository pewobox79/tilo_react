import { Outlet } from "react-router"
import AuthLayout from "./AuthLayout"

const DashboardLayout = () => {
    return (
        <div style={{
            border: "1px solid red",
            minHeight: 500,
            height: "auto",
            backgroundColor: "lightblue"
        }}>
            <AuthLayout user={false}>
                <Outlet />
            </AuthLayout>
        </div>
    )
}

export default DashboardLayout
