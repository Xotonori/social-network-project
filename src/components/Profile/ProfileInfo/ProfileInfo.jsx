import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <React.Fragment>
            <img src={require('./img/content-img.jpg')} alt="" className={s.mainImage}/>
            <div className={s.profile}>
                <img src={require('./img/photo.jpg')} alt="nature" className={s.photo}/>
                <div className={s.info}>
                    <div className={s.name}>
                        Alexey D.
                    </div>
                    <div className={s.data}>
                        <div className={s.birthday}>
                            Date of Birth: 29 january
                        </div>
                        <div className={s.city}>
                            City: Saint-Petersburg
                        </div>
                        <div className={s.education}>
                            Education: SPASK'06
                        </div>
                        <div className={s.site}>
                            Web site: https://it-kamasutra.com
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfileInfo;