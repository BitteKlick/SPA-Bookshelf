import React from 'react';
import './Authors.css';
import schwabImage from './images/schwab.png';
import adamsImage from './images/adams.png';

const authorsData = [
  {
    id: 1,
    name: "V.E.Schwab",
    description: "Victoria „V. E.“ Schwab ist die Autorin der New York Times-Bestsellerliste mit mehr als zwanzig Büchern, darunter das gefeierte Shades Universum, die Villains Serie, die City of Ghosts Serie, Gallant, The Invisible Life of Addie LaRue und The Fragile Threads of Power. Wenn sie nicht durch die Straßen von Paris streift oder englische Hügel erklimmt, kann sie in Edinburgh, Schottland, gefunden werden, wo sie in einer Ecke eines Cafés sitzt und Monster erträumt.",
    imageUrl: schwabImage,
  },
  {
    id: 2,
    name: "Douglas Adams",
    description: "Douglas Noël Adams, ein englischer Autor, Komödien-Radio-Dramatiker und Musiker, ist berühmt für die Schöpfung der Hitchhiker's Guide to the Galaxy-Reihe. Diese Reihe, die als Radioshow begann, entwickelte sich zu fünf Büchern, verkaufte über fünfzehn Millionen Exemplare und wurde auch in TV- und Comicserien, ein Computerspiel und einen posthumen Film adaptiert. Zusätzlich inspirierte sie zu Theateradaptionen, einige davon verfasst von Adams selbst. Unter Fans auch als Bop Ad oder DNA bekannt, trug Adams zur Doctor Who-Serie bei, schrieb die Dirk Gently-Romane, verfasste gemeinsam die Liff-Bücher und Last Chance to See und entwickelte das Spiel Starship Titanic. Zu seinen posthumen Werken gehört The Salmon of Doubt. Adams war auch ein Umweltaktivist, Technikbegeisterter und ein renommierter Redner über Technologie und Umwelt.",
    imageUrl: adamsImage,
  },
  // Füge hier weitere Autoren hinzu (hypothetisch)
];

function Authors() {
  return (
    <div className="authorsContainer">
      {authorsData.map((author) => (
        <div key={author.id} className="authorCard">
          <div className="imageContainer">
            <img src={author.imageUrl} alt={`Bild von ${author.name}`} />
          </div>
          <div className="info">
            <h2>{author.name}</h2>
            <p>{author.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Authors;