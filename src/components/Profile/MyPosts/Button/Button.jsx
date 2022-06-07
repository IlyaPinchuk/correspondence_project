import classes from "./Button.module.scss";

const Button = (props) => {
    return (
            <button className={classes.btn} onClick={props.onClick}><img src={props.src} alt=""/> {props.name}</button>
    )
}
export default Button