import React from 'react';
import './Home.css';

// Alles was man auf dem Bildschirm sieht ausgeschrieben
function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Willkommen in meiner Buchsammlung</h1>
        <p>Hier ist Einblick für den Zweck der Website. Entdecke meine aktuellen Reads, Recommendations, Reviews und vieles mehr.</p>
        <p>Die Idee der Webseite ist enstanden, da ich seit Neujahr versuche Lesen ernster zu nehmen. Demnach ist gibt es auch noch nicht zu viel über das ich schreiben könnte...</p>
      </section>
      
      <div className="features">
        <div className="feature">
          <h2>Current Reads</h2>
          <p>Bücher, die ich gerade lese, mit kurzen Beschreibungen oder ersten Eindrücken.</p>
        </div>
        <div className="feature">
          <h2>Recommendations</h2>
          <p>Eine Auswahl von Büchern, die ich besonders mag und euch empfehlen würde.</p>
        </div>
        <div className="feature">
          <h2>Reviews</h2>
          <p>Meinungen und Kritiken zu den Büchern, die ich gelesen habe.</p><p>(meist sehr spezifische nitpicks)</p>
        </div>
        <div className="feature">
          <h2>Bookshelf</h2>
          <p>Liste an Büchern, die ich besitze. Keine Schulbücher. Ew.</p>
        </div>
        <div className="feature">
          <h2>Tropes</h2>
          <p>Lieblings Tropes in literarischen Werken mit kurzer (meist unsinniger) Erklärung, warum ich die Tropes mag.</p>
        </div>
        <div className="feature">
          <h2>Authors</h2>
          <p>Lieblingsautoren! Mit einer größtenteils von Goodreads kopierten Biographie.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;