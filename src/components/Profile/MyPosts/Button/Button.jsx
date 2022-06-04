import classes from "./Button.module.scss";

const Button = (props) => {
    return (
        <div className={classes.wrapperButton}>
            <button onClick={props.onClick}><img src={props.src} alt=""/> {props.name}</button>
        </div>
    )
}
export default Button