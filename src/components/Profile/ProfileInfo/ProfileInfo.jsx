import React from 'react';
import s from './ProfileInfo.module.scss';
import contentImg from '../../../assets/img/ProfileInfo/img/content-img.jpg';
import Social from "./Social/Social";
import defaultUserPhoto from './../../../assets/img/default-user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    const socialKeys = Object.keys(props.profile.contacts);

    return (
        <>
            {/*<img src={contentImg} alt="nature" className={s.mainImage}/>*/}
            <div className={s.profile}>
                <img src={props.profile.photos.large || defaultUserPhoto} alt="photo" className={s.photo}/>
                <div className={s.info}>
                    <ProfileStatus
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
                    <div className={s.name}>
                        <span className={s.label}>Имя:</span>
                        <span>{props.profile.fullName}</span>
                    </div>
                    <div className={s.data}>
                        <div className={s.aboutMe}>
                            <span className={s.label}>Обо мне:</span>
                            <span>{!!props.profile.aboutMe ? props.profile.aboutMe : 'нет =('}</span>
                        </div>
                        <div className={s.social}>
                            {socialKeys.map((socialItem) => (
                                <Social socialItem={socialItem} socialAnchor={props.profile.contacts[socialItem]}/>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;