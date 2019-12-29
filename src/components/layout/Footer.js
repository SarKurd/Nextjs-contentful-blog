import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-social">
        <div>
          <a
            href="https://www.github.com/sarkurd"
            target="_blank"
            rel="noopnner noreferrer"
          >
            Github
          </a>
        </div>

        <div>
          <a
            href="https://www.twitter.com/sarkurd"
            target="_blank"
            rel="noopnner noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>

      <style jsx>
        {`
          footer {
            max-width: 800px;
            padding: 10px;
            margin: 0 auto;
          }

          .footer-social {
            display: flex;
          }

          .footer-social > div:first-child {
            margin-right: 50px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
