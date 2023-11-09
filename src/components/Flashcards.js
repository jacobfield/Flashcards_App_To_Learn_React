import { Flashcard } from "./Flashcard.js";

// Flashcards component for displaying flashcard items
export function Flashcards({ flashcardData, setData }) {
  console.log(flashcardData);
  // create a function to delete the flashcard. It will use setData, passed down from App
  // Event handler function for deleting flashcards
  function deleteFlashcard(id) {
    // .filter is the method to remove an object from an array
    console.log(flashcardData);
    const updatedFlashcards = flashcardData.filter(
      (flashcard) => flashcard.id !== id
    );
    // use setData function to set the data state with the new, updatedFlashcards state without the deleted flashcard
    setData(updatedFlashcards);
  }
  // Return things to render - specifically the html to be shown on the webpage.

  // the .map method is applying everything after the => to each element of the array that it is mapping over
  // Rendering flashcard items
  return (
    // Creating a section element with the class "flashcardsAll"
    <section className="flashcardsAll">
      {/* // Iterating through each flashcard object in the flashcardData array. Returning a flashcard component for each flashcard object*/}
      {flashcardData.map((flashcardData) => {
        return (
          <Flashcard
            // pass the important components down to the individual flashcard as props, including the deleteFlashcard function as onDelete
            // Assigning a unique key to each Flashcard component for efficient rendering
            key={flashcardData.id}
            // Passing the current flashcard object as a prop named "flashcardObject"
            flashcardObject={flashcardData}
            // Passing the deleteFlashcard function as a prop named "onDelete"
            onDelete={deleteFlashcard}
          />
        );
      })}
    </section>
  );
}
