import classes from './NavLinkItem.module.scss';
import {NavLink} from "react-router-dom";


const NavLinkItem = (props) => {
    return (
            <div className={classes.item} >
                <NavLink  to={props.url} className = { navData => navData.isActive ? classes.active : classes.noActive } >{props.name}</NavLink>
            </div>
    )
}
export default NavLinkItem