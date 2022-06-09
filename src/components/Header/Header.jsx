import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <header className={classes.header}>
          <img
              src="https://cdn-icons-png.flaticon.com/512/1411/1411885.png"
              alt=""/>
          <div className={classes.loginBlock}>
              {props.isAuth ? <span>{props.login}</span> :<NavLink to={'/logn'}>Login</NavLink>}
              <img src={props.photo} alt=""/>
          </div>
      </header>
  )
}
export default Header;