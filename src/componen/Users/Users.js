import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {props.users.map(u => <User followingInProgress={props.followingInProgress}
                                        user={u}
                                        key={u.id}
                                        unfollow={props.unfollow}
                                        follow={props.follow}/>
            )
            }
        </div>
    </div>

}
export default Users;