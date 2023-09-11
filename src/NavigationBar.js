import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
      <ul className="navigation-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/philosophers">Philosophers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
