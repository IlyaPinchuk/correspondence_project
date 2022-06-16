import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import loginFormSchema from "../../untils/validators/LoginFormSchema";
import {connect} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import classes from "./Login.module.scss";


const Login = ({isAuth, userId, login}) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (isAuth) return navigate(`/profile/${userId}`)
    }, [isAuth]);
    return (
        <div className={classes.loginBlock}>
            <h1>Login</h1>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                onSubmit={(values) => {
                    login(values.email, values.password, values.rememberMe)
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                validationSchema={loginFormSchema}
            >
                {(errors) => (
                    <Form className={classes.wrapperForm}>
                        <div>
                            <Field validate={[require]} type={'text'} name={'email'} placeholder={'e-mail'}/>
                        </div>
                        <ErrorMessage name="email" component="div"/>
                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'}/>
                        </div>
                        <ErrorMessage name="password" component="div"/>
                        <div>
                            <Field type="checkbox" name={'rememberMe'}/>
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>
                        <button type={'submit'}>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    login
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
