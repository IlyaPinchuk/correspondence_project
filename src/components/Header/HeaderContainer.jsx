import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setUserPhoto} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    };

    render() {
        return <Header {...this.props}/>
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
};

const mapDispatchToProps = {getAuth, setUserPhoto, logout};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)