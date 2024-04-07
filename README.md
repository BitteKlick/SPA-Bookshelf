# SPA-Bookshelf

Diese Single Page Application, "SPA-Bookshelf", ist eine Sammlung von Informationen über Bücher, die ich gerade lese oder gelesen habe, und meine Meinungen dazu. Man findet zum Beispiel die Kategorie "Home", in der alle anderen Kategorien erklärt werden, wie "Bookshelf", in der ich einige meiner Bücher aufgelistet habe, "Recommendations", wo ich gute Bücher vorschlage, "Reviews", wo meine Goodreads-Rezensionen stehen (selbst eingesetzt, nicht automatisch), oder "Tropes", wo drei Tropes in der Literatur gelistet sind, die ich besonders mag, sowie "Authors", wo ich zwei Autoren empfehle.
Diese SPA dient mehr mir selbst als ein nettes persönliches Projekt, das ich zukünftig erweitern könnte. Ich hoffe, als Abgabe zum Projekt zeigt sie, dass ich mich mit dem Thema beschäftigt habe. 
Die Kategorie "Current Reads" ist die einzige, die auf den Server zugreift, da ich testen wollte, wie das Backend funktioniert, und das war die letzte Komponente, die ich zu programmieren hatte.

Hier ist die Erklärung zur Installierung:

## Voraussetzungen

Bevor du beginnst, stelle sicher, dass du folgende Software installiert hast:

Node.js (mindestens Version 12.x)
npm (wird mit Node.js installiert)

## Installation

Folge diesen Schritten, um die Anwendung lokal zu installieren:

### 1. Klone das Repository

git clone https://github.com/BitteKlick/SPA-Bookshelf.git
cd SPA-Bookshelf

### 2. Installiere die Abhängigkeiten für den Server

Wechsle in das Server-Verzeichnis und installiere die Abhängigkeiten:

cd server
npm install

### 3. Installiere die Abhängigkeiten für den Client

Wechsle in das Client-Verzeichnis und installiere die Abhängigkeiten:

cd ../client
npm install

## Starten der Anwendung

Um sowohl den Client als auch den Server zu starten, musst du zwei Terminals öffnen:

### 1. Starte den Server

Im server-Verzeichnis:

npm start

Der Server läuft nun auf http://localhost:5000.

### 2. Starte den Client

Im client-Verzeichnis in einem neuen Terminal:

npm start

Der Client wird automatisch in deinem Browser geöffnet (auf http://localhost:3000).
