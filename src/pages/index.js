import React from 'react';

const index = () => {
  return (
    <div className="home-wrapper">
      <div className="author-info">
        <div className="avatar">
          <div className="avatar-container">
            <img src="/grendizer.png" />
          </div>
        </div>
        <h1>SARBAST MOHAMMED</h1>
        <p>Software Engineer</p>
      </div>
      <style jsx>
        {`
          .home-wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .author-info > h1 {
            margin-bottom: 0;
          }
          .author-info > p {
            margin-top: 0;
          }

          .avatar {
            display: flex;
            margin: 0 auto;
          }

          .avatar-container {
            width: 200px;
            height: 200px;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto;
          }

          img {
            height: 100%;
            position: relative;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        `}
      </style>
    </div>
  );
};

export default index;
