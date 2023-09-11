import React from 'react';
import NavigationBar from '../NavigationBar';
import './BookPage.module.css'; 


function BookPage() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <h1>Books on Stoicism</h1>
      </header>
      <ul className="book-list">
        <li className="book-list-item">The Art of Living</li>
        <li className="book-list-item">Meditations</li>
        <li className="book-list-item">Letters from a Stoic</li>
        <li className="book-list-item">The Obstacle Is the Way</li>
        <li className="book-list-item">Stillness Is The Key</li>
      </ul>
    </div>
  );
}

export default BookPage;
