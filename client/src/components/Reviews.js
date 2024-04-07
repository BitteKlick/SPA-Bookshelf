import React, { useState } from 'react';
import './Reviews.css';

const reviewsData = [
  {
    title: "Joyland (2013)",
    author: "Stephen King",
    review: "2/5 - i liked the part where the guy just worked at joyland... i didn’t like the part where he talked about his ex or women in general and the murder mystery",
  },
  {
    title: "Bored Gay Werewolf (2023)",
    author: "Tony Santorella",
    review: "3/5 - The Bored Gay Werewolf part was cool... The Story:tm: wasn’t that good and most of the fault goes to Abe",
  }
  // Füge hier weitere Reviews hinzu, falls ich jemals welche schreiben würde :(
];

function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    const filteredReviews = reviewsData.filter(review => 
      review.title.toLowerCase().includes(newSearchTerm) || 
      review.author.toLowerCase().includes(newSearchTerm)
    );
    setReviews(filteredReviews);
  };

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <p>Vorwarnung: Das sind meine Bewertungen von Goodreads und... Ich habe selten starke Meinungen. Also ist diese Sektion entsprechend leer.</p>
      <input
        type="text"
        placeholder="Suche nach Titel/Author..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchInput"
      />
      <div className="reviewList">
        {reviews.map((review, index) => (
          <div key={index} className="reviewCard">
            <h2>{review.title} - {review.author}</h2>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <p>Nochmal, ich schreibe usually keine reviews...</p>
    </div>
  );
}

export default Reviews;