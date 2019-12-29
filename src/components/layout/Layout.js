import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
      <style jsx>
        {`
          .layout {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
          }
          .layout-content {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 10px;
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
