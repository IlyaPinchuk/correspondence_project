import classes from "./TextArea.module.scss";

const TextArea = (props) => {

    return (
        <div className={classes.wrapperArea}>
            <textarea ref={props.ref}></textarea>
        </div>

    )
}
export default TextArea