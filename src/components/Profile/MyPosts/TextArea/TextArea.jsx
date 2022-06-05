import classes from "./TextArea.module.scss";

const TextArea = (props) => {

    return (
        <div className={classes.wrapperArea}>
        <input
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}/>
        </div>
    )
}
export default TextArea