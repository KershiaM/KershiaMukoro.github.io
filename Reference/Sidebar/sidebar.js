import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Start with the sidebar open

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.sidebar : styles.sidebarClosed}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className={styles.content}>
        <h2>Sidebar Title</h2>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
