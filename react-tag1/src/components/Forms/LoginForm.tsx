import { useLocalStorage } from "../../hooks/useLocalStorage";
import { UserType } from "../../types/userTypes";
import { useFormik } from "formik";
import { useState } from "react";
import styles from '../../styles/Forms.module.css'

const LoginForm = () => {


    const local = useLocalStorage("ituser")
    const loggedLocal = useLocalStorage("logged")
    const [login, setLogin] = useState<boolean>(true)

    const formik = useFormik({
        initialValues: {} as UserType,
        onSubmit: values => {
            console.log("values ", values)

            if (local.value.email === values.email && local.value.password === values.password) {
                loggedLocal.setLocalStorage(true)
                setLogin(true)
            } else {
                console.log("error login")
                setLogin(false)
            }

        }
    })
    return <form onSubmit={formik.handleSubmit}>

        <h1>Login</h1>
        <div className={styles.formInner}>
            <label htmlFor="email">email</label>
            <input name="email" id="email" type="text" value={formik.values.email} onChange={formik.handleChange} />

            <label htmlFor="password">password</label>
            <input name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />

            <button type="submit">login</button>

        </div>
        {!login && <p>Login failed. Please check PW und EMAIL</p>}
    </form>
}

export default LoginForm