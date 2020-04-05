import React from 'react';

const Profile =() => {
  return(
      <main className={'content'}>
          <img src={require('../img/content-img.jpg')} alt="" className="content__main-image"/>
          <div className="content__profile">
              <img src={require('../img/photo.jpg')} alt="nature" className="content__photo"/>
              <div className="content__info">
                  <div className="content__name">
                      Alexey D.
                  </div>
                  <div className="content__data">
                      <div className="content__birthday">
                          Date of Birth: 29 january
                      </div>
                      <div className="content__city">
                          City: Saint-Petersburg
                      </div>
                      <div className="content__education">
                          Education: SPASK'06
                      </div>
                      <div className="content__site">
                          Web site: https://it-kamasutra.com
                      </div>
                  </div>
              </div>
          </div>
          <div className="content__my-post">
              <h3>My posts</h3>
              <textarea name="my-post" id="my-post" cols="30" rows="10">
                    </textarea>
              <button className={'content__send-button'}>Send</button>
          </div>
          <div className="content__all-posts">
              <div className="content__post">
                  <img src="" alt="avatar" className="content__avatar-post"/>
                  <div className="content__text-post">Hey, why nobody love me?</div>
              </div>
              <div className="content__post">
                  <img src="" alt="avatar" className="content__avatar-post"/>
                  <div className="content__text-post">Hey, why nobody love me?</div>
              </div>
          </div>
      </main>
  );
};

export default Profile;