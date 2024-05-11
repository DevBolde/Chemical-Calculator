import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
