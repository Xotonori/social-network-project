import React from 'react'
import s from './Users.module.scss'
import defaultUserPhoto from '../../assets/img/default-user.png'
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from 'react-router-dom'
import axios from "axios";
import {ROOT_URL} from "../../redux/reduxStore";

let Users = props => {
    const countPages = Math.ceil(props.totalCountUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i < countPages; i++) {
        pages.push(i);
    }

    return (

        props.isFetching ? <Preloader/> :

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
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small || defaultUserPhoto} alt="avatar"/>
                                </NavLink>
                            </div>

                            {user.followed ?
                                <button onClick={() => {

                                    axios.delete(`${ROOT_URL}/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b08b218c-1bb1-4bbc-9d99-adc8b3f17984'
                                        }
                                    })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.unfollow(user.id)
                                            }
                                        })

                                }}> Unfollow </button>
                                :
                                <button onClick={() => {

                                    axios.post(`${ROOT_URL}/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b08b218c-1bb1-4bbc-9d99-adc8b3f17984'
                                        }
                                    })
                                        .then(res => {
                                            if (res.data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })

                                }}> Follow </button>
                            }

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