import React from 'react';

const index = () => {
  return (
    <div className="home-wrapper">
      <div className="author-info">
        <div className="avatar">
          <div className="avatar-container">
            <img src="/grendizer.jpg" alt="grendizer" />
          </div>
        </div>
        <div className="description">
          <h1>Grendizer</h1>
          <p>UFO Robot</p>
        </div>
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

          .description > h1,
          .description > p {
            margin: 0;
            text-align: center;
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
            margin: 0 auto 10px auto;
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
