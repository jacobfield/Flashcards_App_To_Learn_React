import { useState } from "react";

// Individual Flashcard component for displaying a single flashcard
// flashcardObject, onDelete are the propd that are pushed down to Flashcard
export function Flashcard({ flashcardObject, onDelete }) {
  // Initializing state variables for flashcard content and styles
  const [text, setText] = useState(flashcardObject.question);
  const [color, setColor] = useState("#323949");
  const [emoji, setEmoji] = useState("🤔");
  const [trueFalse, setTrueFalse] = useState(false);

  // // destructuring the flashcardObject
  const { question, answer, id } = flashcardObject;

  // Event handler functions for displaying question and answer
  // Event handler function to display question
  function displayQuestion() {
    setText(question);
    setEmoji("🤔");
    setColor("#323949");
    setTrueFalse(false);
  }

  // Event handler function to display answer
  function displayAnswer() {
    setText(answer);
    setEmoji("🤯");
    setColor("#06b1df");
    setTrueFalse(true);
  }
  // Event handler function to delete flashcard.
  // deleteFlashcard() uses onDelete - the callback function prop passed down from App
  function deleteFlashcard() {
    onDelete(id);
  }
  // Rendering individual flashcard item
  return (
    <span>
      <div
        style={{ background: color }}
        className="flashcard"
        key={flashcardObject.id}
        onClick={() =>
          trueFalse === false ? displayAnswer() : displayQuestion()
        }
      >
        <button className="delete-button" onClick={deleteFlashcard}>
          ❌
        </button>
        <p>{emoji}</p>
        <p> {text}</p>
      </div>
    </span>
  );
}
