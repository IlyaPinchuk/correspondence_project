import classes from "./TextArea.module.scss";

const TextArea = (props) => {

    return (
        <div className={classes.wrapperArea}>
        <input
            ref={props.innerRef}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}/>
        </div>
    )
}
export default TextArea