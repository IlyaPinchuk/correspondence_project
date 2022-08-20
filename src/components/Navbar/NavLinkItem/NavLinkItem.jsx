import classes from './NavLinkItem.module.scss';
import {NavLink} from "react-router-dom";


const NavLinkItem = ({url, name, icon}) => {
    return <NavLink
        to={url} className={({isActive}) => (isActive ? `${classes.active}` : 'inactive') + ' ' + classes.item}>
        {icon}{name}</NavLink>
}
export default NavLinkItem