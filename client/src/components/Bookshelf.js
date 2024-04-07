import React from 'react';
import './Bookshelf.css';

const bookshelfData = [
  {
    title: "A Darker Shade of Magic",
    author: "V.E.Schwab",
    year: "2015",
    goodreadsUrl: "https://www.goodreads.com/book/show/22055262-a-darker-shade-of-magic?from_search=true&from_srp=true&qid=VDTw39EMMu&rank=1"
  },
  {
    title: "A Gathering of Shadows",
    author: "V.E.Schwab",
    year: "2016",
    goodreadsUrl: "https://www.goodreads.com/book/show/20764879-a-gathering-of-shadows"
  },
  {
    title: "A Conjuring of Light",
    author: "V.E.Schwab",
    year: "2017",
    goodreadsUrl: "https://www.goodreads.com/book/show/29939230-a-conjuring-of-light"
  },
  {
    title: "Vicious",
    author: "V.E.Schwab",
    year: "2013",
    goodreadsUrl: "https://www.goodreads.com/book/show/40874032-vicious?from_search=true&from_srp=true&qid=3FziT0zEp2&rank=1"
  },
  {
    title: "Vengeful",
    author: "V.E.Schwab",
    year: "2018",
    goodreadsUrl: "https://www.goodreads.com/book/show/26856502-vengeful"
  },
  {
    title: "Joyland",
    author: "Stephen King",
    year: "2013",
    goodreadsUrl: "https://www.goodreads.com/book/show/13596166-joyland?from_search=true&from_srp=true&qid=laaFpCSnH4&rank=1"
  },
  {
    title: "Bored Gay Werewolf",
    author: "Tony Santorella",
    year: "2023",
    goodreadsUrl: "https://www.goodreads.com/book/show/75374437-bored-gay-werewolf?ref=nav_sb_ss_1_18"
  },
  {
    title: "Chainsaw Man: Buddy Stories",
    author: "Tatsuki Fujimoto, Sakaku Hishikawa",
    year: "2023",
    goodreadsUrl: "https://www.goodreads.com/book/show/75720009-chainsaw-man?ref=nav_sb_ss_1_18"
  },
  {
    title: "If We Were Villains",
    author: "M.L.Rio",
    year: "2017",
    goodreadsUrl: "https://www.goodreads.com/book/show/30319086-if-we-were-villains?from_search=true&from_srp=true&qid=NbkEGTABFh&rank=1"
  },
  {
    title: "I Fell in Love with Hope",
    author: "Lancali.",
    year: "2022",
    goodreadsUrl: "https://www.goodreads.com/book/show/61713106-i-fell-in-love-with-hope?from_search=true&from_srp=true&qid=WzHv6tZBG9&rank=1"
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    year: "2016",
    goodreadsUrl: "https://www.goodreads.com/book/show/27362503-it-ends-with-us?ref=nav_sb_ss_1_15"
  },
  {
    title: "The Call of Cthulhu and Other Weird Stories",
    author: "H.P.Lovecraft",
    year: "1926",
    goodreadsUrl: "https://www.goodreads.com/book/show/160149.The_Call_of_Cthulhu_and_Other_Weird_Stories"
  },
  // Füge hier weitere Bücher hinzu
];

function Bookshelf() {
  return (
    <div className="bookshelf">
      <h1>Bookshelf</h1>
      <ul>
        {bookshelfData.map((book, index) => (
          <li key={index}>
            <a href={book.goodreadsUrl} target="_blank" rel="noopener noreferrer">
              {book.title}
            </a> - {book.author}, {book.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookshelf;
