import { useState } from "react";
import logo from "../logo512.png";

// Header component for displaying header content
export function Header() {
  return (
    //    react icon
    <header className="headerClass">
      <img
        src={logo}
        className="App-logo"
        alt="react logo"
        style={{ maxWidth: "75px", maxHeight: "75px", margin: "0.5rem 0 0 0" }}
      />
      <h1>React Flashcards</h1>
      <p>🧠 Expand Your React Knowledge. One Flashcard at a Time! 🐌</p>
    </header>
  );
}
