import React from 'react'
import s from './Users.module.css'
import {connect} from 'react-redux'
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";

const Users = props => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: false,
                    photoUrl: 'https://www.meme-arsenal.com/memes/5452ab3911b22c500d56678094e2015e.jpg',
                    fullName: 'Dmitry',
                    status: 'I\'m tired!',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    followed: true,
                    photoUrl: 'https://www.meme-arsenal.com/memes/5452ab3911b22c500d56678094e2015e.jpg',
                    fullName: 'Dmitry',
                    status: 'I\'m tired!',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 3,
                    followed: false,
                    photoUrl: 'https://www.meme-arsenal.com/memes/5452ab3911b22c500d56678094e2015e.jpg',
                    fullName: 'Dmitry',
                    status: 'I\'m tired!',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 4,
                    followed: true,
                    photoUrl: 'https://www.meme-arsenal.com/memes/5452ab3911b22c500d56678094e2015e.jpg',
                    fullName: 'Dmitry',
                    status: 'I\'m tired!',
                    location: {country: 'Belarus', city: 'Minsk'}
                }
            ]
        );
    }

    return (
        <div className={s.Users}>
            {props.users.map(user => (


                <div className={s.user}>
                    <div className={s.subscribe}>
                        <div className={s.imgWrapper}>
                            <img src={user.photoUrl} alt="avatar"/>
                        </div>
                        <button onClick={user.followed ? () => props.follow(user.id) : () => props.unfollow(user.id)}>
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                    <div className={s.userData}>
                        <div>
                            <div className={s.fullName}>{user.fullName}</div>
                            <div className={s.status}>{user.status}</div>
                        </div>
                        <div>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>


            ))}
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);

{/*<User*/
}
{/*key={user.id}*/
}
{/*id={user.id}*/
}
{/*fullName={user.fullName}*/
}
{/*followed={user.followed}*/
}
{/*status={user.status}*/
}
{/*location={user.location}*/
}
{/*/>*/
}