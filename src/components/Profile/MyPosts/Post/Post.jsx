import classes from "./Post.module.scss";

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src ={props.img} alt=""/>
                <span className={classes.massage}>{props.message}</span>
                <div className={classes.wrapp_like}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png" alt=""/>
                    <span>{props.count}</span>
                </div>
            </div>
    )
}
export default Post