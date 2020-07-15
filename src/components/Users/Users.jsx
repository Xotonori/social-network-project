import React from 'react'
import classess from './Users.module.scss'
import defaultUserPhoto from '../../assets/img/default-user.png'
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from 'react-router-dom'

let Users = props => {
    const countPages = Math.ceil(props.totalCountUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i < countPages; i++) {
        pages.push(i);
    }

    return (
        props.isFetching ? <Preloader/> :

            <div className={classess.Users}>
                <div className={classess.pagination}>
                    {pages.map((pageNumber, index) => (
                        <span
                            key={index}
                            className={`${classess.pageNumber} ${props.currentPage === pageNumber && classess.selectedPage}`}
                            onClick={() => props.onPageChanged(pageNumber, props.pageSize)}
                        >{pageNumber}</span>
                    ))}
                </div>

                {props.users.map(user => (

                    <div className={classess.user}>
                        <div className={classess.subscribe}>
                            <div className={classess.imgWrapper}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small || defaultUserPhoto} alt="avatar"/>
                                </NavLink>
                            </div>

                            {
                                user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}
                                            disabled={props.isFollowingProgress.some(id => id === user.id)}> Unfollow </button>
                                    :
                                    <button onClick={() => props.follow(user.id)}
                                            disabled={props.isFollowingProgress.some(id => id === user.id)}> Follow </button>
                            }

                        </div>
                        <div className={classess.userData}>
                            <div>
                                <div className={classess.name}>{user.name}</div>
                                <div className={classess.status}>{user.status || 'no status =('}</div>
                            </div>
                            <div>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

    )

};

export default Users;