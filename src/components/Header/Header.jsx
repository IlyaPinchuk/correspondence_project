import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "../Redux/auth-reducer";


const Header = () => {
    const dispatch = useDispatch();
    const {isAuth, login, photo} = useSelector((state) => ({
        isAuth: state.auth.isAuth,
        login: state.profilePage.profile.fullName,
        photo: state.profilePage.profile.photos.small
    }))
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
                    <div className={classes.profileBlock}>
                        <img className={classes.avatarka} src={photo} alt=""/>
                        <span>{login}</span>
                    </div>
                    : <div className={classes.profileBlock}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>}

            </div>
        </header>
    )
}
export default Header;