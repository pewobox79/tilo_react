
const AuthLayout = ({children, user}) => {

    return <>{!user ? <h1>user not authorized</h1>: children}</>
}

export default AuthLayout
