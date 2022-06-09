import loader from "../../../assets/loader.svg";
import classes from "./loader.module.scss";


const Loader = () => {
    return (
          <div className={classes.wraperLoader}>
             <img src={loader} alt=''/>
         </div>
    )
}
export default Loader