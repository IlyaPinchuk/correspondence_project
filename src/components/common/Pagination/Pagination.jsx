import classes from "../../Users/Users.module.scss";


const Pagination = (props) => {
    return (
        <span className={props.currentPage === props.pageNumber ? classes.selectPage : undefined}
              onClick={props.onClick}>{props.pageNumber}</span>
    )
}

export default Pagination