import classes from "./Post.module.scss";

const Post = ({img, message, count}) => {
    return (
        <div className={classes.item}>
            <img src={img} alt=""/>
            <span className={classes.massage}>{message}</span>
            <div className={classes.wrapp_like}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png"
                    alt=""/>
                <span>{count}</span>
            </div>
        </div>
    )
}
export default Post