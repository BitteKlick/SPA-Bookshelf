import React, { useState } from 'react';
import './Tropes.css';

const tropesData = [
  {
    name: "Found Family",
    description: "beschreibt eine Gruppe von Charakteren, die keine biologische Familie sind, aber tiefe Bindungen und gegenseitige Unterstützung entwickeln, die einer familiären Beziehung gleichen. Oft in Geschichten gefunden, wo Charaktere Isolation oder Missverständnisse überwinden, um ihre gewählte 'Familie' zu finden. Habt ihr jemals wacklige Beziehungen mit eurer Familie gehabt? Habt ihr Freunde für die ihr sterben würdet? Yap, hier werdet ihr euch daheim fühlen.",
  },
  {
    name: "X to Enemies",
    description: "beschreibt eine Entwicklung in Geschichten, bei der Charaktere, die ursprünglich in einer positiven Beziehung zueinander standen (wie Freunde, Verbündete oder Liebesinteressen), zu Rivalen oder Feinden werden. Diese Wendung kann durch Verrat, Missverständnisse, Konflikte um gemeinsame Ziele oder tiefgreifende ideologische Differenzen ausgelöst werden. Warum sind Feindschaften im echten leben immer so wiederlich? Ich brauch eine unterschwellige romantische Tension mit einem Trump Supporter.",
  },
  {
    name : "Morally ambiguous Protagonist",
    description: "bezieht sich auf Hauptcharaktere, deren moralische Werte und Entscheidungen nicht klar als rein gut oder böse einzuordnen sind. Diese Figuren handeln oft aus persönlichem Interesse oder folgen einem Kodex, der von konventionellen Moralvorstellungen abweicht. Ihre Handlungen und Motivationen sind komplex und führen den Leser dazu, Ethik und Auswirkungen ihrer Entscheidungen zu hinterfragen. Diese Charaktere tragen zur Tiefe der Erzählung bei, indem sie Themen wie Grauzonen der Moral, die Relativität von Gut und Böse sowie die menschliche Natur erforschen. Von der Fanbase werden Charaktere wie diese entweder als 'literally me' oder als sehr sehr attraktiv interpretiert. Oft beides.",
  }
  // Füge hier weitere Tropes hinzu
];

// Formatierung der Liste
function Tropes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tropes">
      <h1>Lieblingstropes</h1>
      {tropesData.map((trope, index) => (
        <div key={index} className="trope">
          <button className="tropeName" onClick={() => toggleDescription(index)}>
            {activeIndex === index ? '−' : '+'} {trope.name}
          </button>
          <div className={`description ${activeIndex === index ? "show" : ""}`}>
            {trope.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tropes;