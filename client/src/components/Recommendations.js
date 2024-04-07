import React from 'react';
import './Recommendations.css';
import viciousCover from './images/vicious.png';
import buddyCover from './images/buddy.png';

const books = [
  {
    title: "Vicious (2013)",
    author: "V.E.Schwab",
    recommendation: "Ich bin einfach so ein Nerd für 'X to Enemies/Rivals'. Dann noch mit Found Family kombinieren? Den Charakteren Emotionen zu geben die nicht ausgesprochen werden müssen? Modernes Verständnis des Superhelden-Genres? Jap. Dieses Buch spricht spezifisch mich an und ich werde nie die Klappe drüber halten. Der Protagonist Victor Vale und der Antagonist Eli Ever? Passend zu dem Namen der Authorin V.E. Schwab? Beide tanzen die Linie der grauen Moral? AAAHHH",
    coverUrl: viciousCover
  },
  {
    title: "Chainsaw Man: Buddy Stories (2023)",
    author: "Tatsuki Fujimoto, Sakaku Hishikawa",
    recommendation: "Großartiger Fan-Content für wenn man nicht genug von der eigentlichen Serie bekommt. Es ist ein Spin-Off Novel von dem Manga 'Chainsaw Man' und erweitert die Backstories einiger Charactere. Warum ich dieses Werk besonders empfehle, ist weil es auch thematisch intelligente Kommentare über die emotionalen Themes der Serie macht. Selbsverständlich bedeutet das aber auch, dass dieses Werk nur wirlich nach dem lesen der eigentlichen Serie genossen werden kann. Tja. Dann müsst ihr halt Chainsaw Man lesen... Was kann man machen.",
    coverUrl: buddyCover
  }
  // Hier mehr Empfehlungen einsetzen (mach ich nicht aber hier gehört das hin)
];

function Recommendations() {
  return (
    <div className="recommendations">
      <h1>Recommendations</h1>
      <div className="books">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <img src={book.coverUrl} alt={`Cover von ${book.title}`} />
            <div className="bookInfo">
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <p>{book.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;