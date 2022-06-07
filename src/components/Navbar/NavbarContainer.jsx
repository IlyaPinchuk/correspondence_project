import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {
    return {
        sideItem: state.sidebar.sideItem,
        friends: state.sidebar.friends
    }
}

const NavbarContainer = connect(mapStateToProps) (Navbar);

export default NavbarContainer