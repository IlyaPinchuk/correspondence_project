import classes from './Navbar.module.scss';
import NavLinkItem from './NavLinkItem/NavLinkItem';
import {useDispatch, useSelector} from "react-redux";
import Button from "../common/Button/Button";
import React from "react";
import {logout} from "../Redux/auth-reducer.ts";
import {AiOutlineLogout} from "react-icons/ai";


const Navbar = () => {
    const dispatch = useDispatch();
    const log = () => dispatch(logout());
    const sideItem = useSelector(state => state.sidebar.sideItem)

    return (
        <nav className={classes.nav}>
            {sideItem.map(s => <NavLinkItem name={s.name} key={s.id} url={s.url} icon={s.icon}/>)}
            <div className={classes.logout}>
                <AiOutlineLogout/>
                <Button onClick={log} name={'Logout'}/>
            </div>
        </nav>
    )
}
export default Navbar;