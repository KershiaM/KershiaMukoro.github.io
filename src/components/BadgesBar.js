import React from 'react';
import styles from './BadgesBar.module.css'; // optional for styling

export default function BadgesBar() {
  return (
    <div className={styles.badgesContainer}>
    <a href="https://www.credly.com/badges/99372977-2552-49fb-97f4-084d95320935/public_url" target="_blank" rel="noopener noreferrer">
      <img
        src={require('@site/static/img/PMI_Member_Badge_2024.png').default}
        alt="PMI Member 2024"
        className={styles.badge}
      />
  </a>
  <a href="https://www.credly.com/badges/886da58b-af82-4fb9-a9b2-c499986ea4ce/public_url" target="_blank" rel="noopener noreferrer">
      <img
        src={require('@site/static/img/CSIS.jpg').default}
        alt="Secure Infrastructure Specialist"
        className={styles.badge}
      />
  </a>
  <a href="https://www.credly.com/badges/4f068e7d-4b11-4f45-91c8-6bba72de556f/public_url" target="_blank" rel="noopener noreferrer">
      <img
        src={require('@site/static/img/SecurityPlus.png').default}
        alt="CompTIA Security+"
        className={styles.badge}
      />
  </a>
  <a href="https://www.credly.com/badges/7be44ebf-7fba-4cfc-b9e0-4582cfead551/public_url" target="_blank" rel="noopener noreferrer">   
      <img
        src={require('@site/static/img/NetworkPlus.png').default}
        alt="CompTIA Network+"
        className={styles.badge}
      />
  </a>
  <a href="https://www.credly.com/badges/47c9515a-fdd8-41af-8604-258bd9f3f021/public_url" target="_blank" rel="noopener noreferrer">  
      <img
        src={require('@site/static/img/APlus.png').default}
        alt="CompTIA A+"
        className={styles.badge}
      />
  </a>
    <a href="https://badges.peoplecert.org/Badges/Assertion/en/e312aaf0-fb64-4a55-8f09-ca756366ffd1" target="_blank" rel="noopener noreferrer"> 
      <img
        src={require('@site/static/img/ITIL4.png').default}
        alt="ITIL 4 Foundation"
        className={styles.badge}
      />
    </a>
    </div>
  );
}
