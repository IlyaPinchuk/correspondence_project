import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item} >
                <NavLink  to="/profile" className = { navData => navData.isActive ? classes.active : classes.noActive } >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink  to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.noActive }>Massages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.noActive }>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? classes.active : classes.noActive }>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : classes.noActive }>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar