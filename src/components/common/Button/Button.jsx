import classes from "./Button.module.scss";

const Button = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={props.disabled ? classes.disabled : classes.btn}
            onClick={props.onClick}>
            <img src={props.src} alt=""/>
            {props.name}
        </button>
    )
}
export default Button