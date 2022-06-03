import classes from "./Button.module.scss";

const Button = (props) => {

    return (
        <div className={classes.wrapperButton}>
            <button>{props.name}</button>
        </div>

    )
}
export default Button