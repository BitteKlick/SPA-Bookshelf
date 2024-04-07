import React, { useEffect, useState } from 'react';
import './CurrentReads.css';

function CurrentReads() {
  const [books, setBooks] = useState([]);

  /* Greifen der Liste vom Backend (server.js)
  (Ich wollte testen wie das funktioniert)
  (Definitiv notwendig jaja) */
  useEffect(() => {
    fetch("/currentreads")
      .then(response => response.json())
      .then(data => {setBooks(data.books)});
  }, []);

  return (
    <div className="currentReads">
      <h1>Current Reads</h1>
      {books.length > 0 ? (
        books.map((book, index) => (
          <div key={index} className="book">
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Beschreibung:</strong> {book.description}</p>
            <p><strong>Erster Eindruck:</strong> {book.impression}</p>
          </div>
        ))
      ) : (
        <p>Lädt...</p>
      )}
    </div>
  );
}

export default CurrentReads;