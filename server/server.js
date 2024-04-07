const express = require('express');
const app = express();

// Endpoint um current reads zu bekommen
app.get("/currentreads", (req, res) => {
    res.json({
        books: [
            {
                title: "Dirk Genly's Holistic Detective Agency (1987)",
                author: "Douglas Adams",
                description: `Dirk Gently, ein selbsternannter Privatdetektiv, macht sich daran, einen mysteriösen Mord aufzuklären, einem geheimnisvollen Professor zu helfen und ein rätselhaftes Geheimnis zu entschlüsseln, während er viel Pizza isst. Dabei beweist er die grundlegende Verbundenheit aller Dinge und rettet nebenbei die Menschheit vor dem Aussterben, ohne Aufpreis.`,
                impression: `Kein Plan worum es wirklich geht, aber ich habe mich sofort mit dem Schreibstil von Douglas Adams verliebt. Dieses Buch muss nicht mal Plot haben und ich würde es 5 Sterne geben.`
            },
            {
                title: "Only A Monster (2022)",
                author: "Vanessa Len",
                description: `Joan verbringt den Sommer bei ihrer exzentrischen Familie in London und verliebt sich in ihren Kollegen Nick. Doch sie entdeckt, dass ihre Familie aus Monstern besteht und Nick ein Monsterjäger ist. Im Kampf ums Überleben muss Joan mit ihrem Feind Aaron zusammenarbeiten und ihre eigene Monstrosität akzeptieren, um ihre Familie zu retten. Sie ist in dieser Geschichte nicht die Heldin.`,
                impression: `Es liest sich, als hätte ich aus Versehen ein Kinderbuch gekauft. Jedes Kapitel muss mir erklären, was bisher passiert ist und jede Handlung und Dynamik wird explizit ausgeschrieben. Naja.`
            },
            {
                title: "Babel (2022)",
                author: "R.F. Kuang",
                description: `Robin Swift, verwaist in Kanton, wird von Professor Lovell nach London gebracht, um für das Studium an Babel, Oxfords magischer Übersetzungsinstitution, vorbereitet zu werden. Während er die Kunst der Silberarbeit erlernt, erkennt er, dass seine Arbeit für Babel Verrat an seiner Heimat bedeutet. Als ein Konflikt mit China droht, steht Robin zwischen Babel und der Hermes-Gesellschaft, die gegen das Empire kämpft.`,
                impression: `Es erscheint sehr kompetent geschrieben mit einer vorsichtigen Dissektion der Thematik, doch bisher war es oft mehr ein Wikipedia-Eintrag vom alten London als eine unterhaltsame Geschichte...`
            }
            // Füge weitere Bücher hier hinzu
        ]
    });
});

// Starte den server
app.listen(5000, () => { 
    console.log("Server started on port 5000"); 
});