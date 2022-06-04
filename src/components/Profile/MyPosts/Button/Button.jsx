import classes from "./Button.module.scss";

const Button = (props) => {
    return (
        <div className={classes.wrapperButton}>
            <button onClick={props.onClick}>{props.name}</button>
        </div>
    )
}
export default Button