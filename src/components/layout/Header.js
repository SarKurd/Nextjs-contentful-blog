import React from 'react';
import ActiveLink from '../ActiveLink';

const Header = () => {
  return (
    <header>
      <nav className="header-navigation">
        <ActiveLink activeClassName="active" href="/">
          <a className="link logo">گ</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/blog">
          <a className="link">Blog</a>
        </ActiveLink>
      </nav>

      <style jsx>{`
        header {
          background-color: #252d32;
        }

        .header-navigation {
          padding: 0 10px;
          height: 100%;
          display: flex;
          max-width: 800px;
          margin: 0 auto;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .header-navigation .link {
          padding: 10px 0;
          border-bottom: 2px solid transparent;
        }

        .header-navigation .link:hover {
          border-bottom: 2px solid #f7ff1a;
        }

        .header-navigation .link.active {
          border-bottom: 2px solid #f7ff1a;
        }

        .logo {
          margin-right: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
