import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";

const LogoutButton = () => {

    const navigate = useNavigate();
    const local = useLocalStorage("logged");
    function handleLogout() {
        local.removeLocalStorage();
        navigate("/login")
    }

    if (!local.value) return

    return <button onClick={handleLogout}>Logout</button>
}

export default LogoutButton