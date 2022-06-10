import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {userAPI} from "../../api/api";
import {setUserProfile} from "./Redux/action";

class ProfileContainer extends React.Component {

    componentDidMount() {
        userAPI.profileUser().then(data => {
            this.props.setUserProfile(data)
        })
    };

    render() {
        return (
            <Profile {...this.props}/>
        )
    };
}

const mapStateToProps = (state) => ({profile: state.profilePage.profile});
const mapDispatchToProps = () => ({setUserProfile});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);