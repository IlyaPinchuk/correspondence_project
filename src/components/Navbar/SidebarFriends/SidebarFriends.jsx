import classes from './SidebarFriends.module.scss';



const SidebarFriends = (props) => {

    return (
     <div className={classes.friendItem}>
         <div className={classes.iconFriend}><img src={props.img} alt=""/></div>
         <p className={classes.friendName}>{props.name}</p>
     </div>
    )
}
export default SidebarFriends