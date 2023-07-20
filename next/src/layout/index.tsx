import React from 'react';
import Navbar from '../components/Navbar';
import Columns from '../components/Columns';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <Columns />
      {children}
    </div>
  );
};

export default Layout;
