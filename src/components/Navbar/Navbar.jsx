import classes from './Navbar.module.scss';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a >Profile</a>
            </div>
            <div className={classes.item}>
                <a >Massages</a>
            </div>
            <div className={classes.item}>
                <a >News</a>
            </div>
            <div className={classes.item}>
                <a >Music</a>
            </div>
            <div className={classes.item}>
                <a >Settings</a>
            </div>
        </nav>
    )
}
export default Navbar