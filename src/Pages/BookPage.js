import React from 'react';
import NavigationBar from '../NavigationBar';
import styles from './BookPage.module.css'; // Import the module.css as 'styles'

function BookPage() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <header className={styles['App-header']}>
        <h1>Books on Stoicism</h1>
      </header>
      <ul className={styles['book-list']}>
        <li className={styles['book-list-item']}>The Art of Living</li>
        <li className={styles['book-list-item']}>Meditations</li>
        <li className={styles['book-list-item']}>Letters from a Stoic</li>
        <li className={styles['book-list-item']}>The Obstacle Is the Way</li>
        <li className={styles['book-list-item']}>Stillness Is The Key</li>
      </ul>
    </div>
  );
}

export default BookPage;
