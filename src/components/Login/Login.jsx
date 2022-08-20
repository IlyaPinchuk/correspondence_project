import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import classes from "./Login.module.scss";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../common/Button/Button";

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8),
})

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userId, isAuth, captchaUrl} = useSelector((state) => ({
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }));

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    const onSubmit = (values) => {
        dispatch(login(values.email, values.password, values.rememberMe, values.captcha));
    };
    useEffect(() => {
        if (isAuth) return navigate(`/profile/${userId}`)
    }, [isAuth]);

    return (
        <div className={classes.loginBlock}>
            <h1>Sing up</h1>
            <form className={classes.wrapperForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.itemForm}>
                    <input className={errors.email ? classes.required : null}
                           type="text"   {...register('email', {required: true})}/>
                    <p className={classes.textError}>{errors.email?.message}</p>
                </div>
                <div className={classes.itemForm}>
                    <input className={errors.password ? classes.required : null}
                           type="password" {...register('password', {required: true})} autoComplete={'on'}/>
                    <p className={classes.textError}>{errors.password?.message}</p>
                </div>
                <div className={classes.rememberMeBlock}>
                    <input type="checkbox" name={'rememberMe'}/>
                    <label htmlFor={'rememberMe'}> remember me </label>
                </div>
                {captchaUrl && <div>
                    <img src={captchaUrl} alt=""/>
                    <input type="text" {...register('captcha', {required: true})} />
                </div>}
                <Button type={'submit'} name={'Sing up'}/>
            </form>

        </div>
    )
}
export default Login;

