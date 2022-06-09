import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserPhoto} from "../Redux/auth-reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        userAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}


export default connect(mapStateToProps, {setAuthUserData, setUserPhoto})(HeaderContainer)