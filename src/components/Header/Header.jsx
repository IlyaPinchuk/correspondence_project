import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, logout} from "../Redux/auth-reducer";


const Header = () => {
    const dispatch = useDispatch();
    const {isAuth, login, photo} = useSelector((state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }))
    const log = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(getAuth())
    }, [])

    return (
        <header className={classes.header}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1411/1411885.png"
                alt=""/>
            <div className={classes.loginBlock}>
                {isAuth ?
                    <div>{login}
                        <button onClick={log}>logout</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
                <img src={photo} alt=""/>
            </div>
        </header>
    )
}
export default Header;