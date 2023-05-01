import React from 'react';
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="page1">page 1</a></li>
        <li><a href="page2">page 2</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
