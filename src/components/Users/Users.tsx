import React, {useEffect} from "react";
import Pagination from "../common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {requestUsers, setCurrentPage} from "./Redux/action";
import Loader from "../common/Loader/Loader";
import User from "./User/User";
import {IUsersReducerShape} from "../../Models/interfaces";
import {RootState} from "../Redux/store";


const Users = () => {
    const dispatch = useDispatch()

    const userPage = useSelector<RootState, IUsersReducerShape>(
        state => state.usersPage
    )

    useEffect(() => {
        // @ts-ignore
        dispatch(requestUsers(userPage.currentPage, userPage.pageSize))
    }, [])

    const onPageChanged = (page: number) => {
        // @ts-ignore
        dispatch(requestUsers(page, userPage.pageSize));
        dispatch(setCurrentPage(page));
    };

    return (
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", width: '100%'}}>
            {userPage.isLoading &&
                <Loader/>
            }
            {!userPage.isLoading &&
                userPage.users.map(u => <User key={u.userId} user={u}
                                              followingInProgress={userPage.followingInProgress}/>)
            }

            <Pagination currentPage={userPage.currentPage} onClick={onPageChanged}
                        totalUsersCount={userPage.totalUsersCount} pageSize={userPage.pageSize}/>
        </div>
    )
};

export default Users;