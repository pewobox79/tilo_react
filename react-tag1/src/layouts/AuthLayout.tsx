import { Outlet } from "react-router"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { ReactElement, ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode | ReactElement | ReactElement[] }) => {

    const user = useLocalStorage("logged")
    if (children && user.value) {
        return <>{children}</>
    }
    if (user.value) return <Outlet />

    return <h1>access denied</h1>
}

export default AuthLayout
