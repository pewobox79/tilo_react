import styles from '../../styles/Forms.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useLocalStorage } from '../../hooks/useLocalStorage';

const INIT_FORM_VALUES = {
    email: "",
    firstname: "",
    lastname: "",
    password: ""
}

const RegisterForm = () => {

    const localStore = useLocalStorage("ituser")

    const RegisterSchema = yup.object().shape({

        email: yup.string().email(),
        firstname: yup.string().min(2).required(),
        lastname: yup.string().min(4),
        password: yup.string()
            .min(8)
            .max(64)
            .matches(/(?=.*[a-z])/)
            .matches(/(?=.*[A-Z])/)
    })

    const formik = useFormik({
        initialValues: INIT_FORM_VALUES,
        validationSchema: RegisterSchema,
        validateOnChange: false,
        onSubmit: values => {

            localStore.setLocalStorage(values)

            formik.resetForm()
        }
    })


    console.log("values", formik.values)


    return <form onSubmit={formik.handleSubmit}>

        <h1>Register Form</h1>
        <div className={styles.formInner}>

            <label htmlFor="email">Email</label>
            <input
                name="email"
                id="email"
                value={formik.values.email}
                type="text"
                onChange={formik.handleChange}
                className={`${formik.errors.email ? styles.error : ""}`}
            />
            {formik.errors.email && <p>{formik.errors.email}</p>}

            <label htmlFor="firstname">Vorname</label>
            <input name="firstname" id="firstname" value={formik.values.firstname} type="text" onChange={formik.handleChange} className={`${formik.errors.firstname ? styles.error : ""}`} />
            {formik.errors.firstname && <p>{formik.errors.firstname}</p>}

            <label htmlFor="lastname">Nachname</label>
            <input name="lastname" id="lastname" type="text" value={formik.values.lastname} onChange={formik.handleChange}
                className={`${formik.errors.lastname ? styles.error : ""}`} />
            {formik.errors.lastname && <p>{formik.errors.lastname}</p>}

            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" value={formik.values.password} onChange={formik.handleChange}
                className={`${formik.errors.password ? styles.error : ""}`} />
            {formik.errors.password && <p>{formik.errors.password}</p>}

            <button>Register</button>
        </div>
    </form>
}

export default RegisterForm
