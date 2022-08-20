import React, {useEffect} from "react";
import Pagination from "../common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers, setCurrentPage} from "./Redux/action";
import Loader from "../common/Loader/Loader";
import User from "./User/User";

const Users = () => {
    const dispatch = useDispatch();
    const {users, pageSize, totalUsersCount, currentPage, isLoading, followingInProgress} = useSelector((state) => ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }))
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

    const onPageChanged = (page) => {
        dispatch(requestUsers(page, pageSize));
        dispatch(setCurrentPage(page));
    };

    return (
        <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column", width:'100%'}}>
            {isLoading &&
                <Loader />
            }
            {!isLoading &&
                 users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}/>)
            }

            <Pagination currentPage={currentPage} onClick={onPageChanged}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        </div>
    )
};

export default Users;