import React from 'react'
import s from './Users.module.scss'
import defaultUserPhoto from '../../assets/img/Users/default-user.png'
import Preloader from "../common/Preloader/Preloader";

let Users = props => {

    const countPages = Math.ceil(props.totalCountUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i < countPages; i++) {
        pages.push(i);
    }

    return (

        props.isFetching ? <Preloader /> :

            <div className={s.Users}>
                <div className={s.pagination}>
                    {pages.map((pageNumber, index) => (
                        <span
                            key={index}
                            className={`${s.pageNumber} ${props.currentPage === pageNumber && s.selectedPage}`}
                            onClick={() => props.onPageChanged(pageNumber)}
                        >{pageNumber}</span>
                    ))}
                </div>

                {props.users.map(user => (

                    <div className={s.user}>
                        <div className={s.subscribe}>
                            <div className={s.imgWrapper}>
                                <img src={user.photos.small || defaultUserPhoto} alt="avatar"/>
                            </div>
                            <button
                                onClick={user.followed ? () => props.follow(user.id) : () => props.unfollow(user.id)}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                        <div className={s.userData}>
                            <div>
                                <div className={s.name}>{user.name}</div>
                                <div className={s.status}>{user.status || 'no status =('}</div>
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