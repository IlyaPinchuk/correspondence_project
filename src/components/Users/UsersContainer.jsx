import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsLoading,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unFollow,
} from "../Redux/users-reducer";
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {userAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsLoading(false)
            this.props.setUsers(data.items)
            console.log(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setIsLoading(true)
        userAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setIsLoading(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isLoading ? <Loader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress
})
const mapDispatchToProps = () => ({
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsLoading,
    toggleFollowingProgress

})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)