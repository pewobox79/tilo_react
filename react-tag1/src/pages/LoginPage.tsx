import { useSearchParams } from 'react-router'
import LoginForm from '../components/Forms/LoginForm'
import RegisterForm from '../components/Forms/RegisterForm';

const LoginPage = () => {

    const [query] = useSearchParams();
    const type = query.get("type");

    return <>
        {type === "register" ? <RegisterForm /> : <LoginForm />}
    </>
}

export default LoginPage
