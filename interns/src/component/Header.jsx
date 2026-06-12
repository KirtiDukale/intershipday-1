import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Welcome to Interns Management System</h1>
          <p className="header-subtitle">
            Manage and organize student internship registrations with ease
          </p>
          <p className="header-description">
            This system helps in efficiently registering interns, maintaining student records, and managing batches across different colleges. Complete your registration in just a few simple steps.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
