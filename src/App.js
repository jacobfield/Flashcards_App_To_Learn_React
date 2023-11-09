import "./App.css";

//useState is a react hook, used to add state to functional components
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { initialFlashcards } from "./initialFlashcards.js";
import { Header } from "./components/Header.js";
import { Form } from "./components/Form.js";
import { Flashcards } from "./components/Flashcards.js";
// import { Flashcard } from "./components/Flashcard.js";
import { Footer } from "./components/Footer.js";

// Defining the main App component
export function App() {
  // Initializing state variables using the useState hook
  // Create some state for keeping track of flashcard objects - useState
  const [data, setData] = useState(initialFlashcards);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // Event handler functions for input fields:
  // function to obtain value of question input box. // Event is later established as onClick.
  function handleQuestionInput(event) {
    setQuestion(event.target.value);
  }
  // function to obtain value of answer input box. // Event is later established as onClick.
  function handleAnswerInput(event) {
    setAnswer(event.target.value);
  }
  // Event handler function for adding new flashcards
  function storeNewFlashcard(event) {
    event.preventDefault(); // Prevents the default form submission behavior - so the page won't refresh on clicks
    // make a new variable that is then pushed to the flashcardData array. Will need to mut these in APP.
    let newFlashcardData = [{ id: uuid(), question: question, answer: answer }];
    //concatenate the Data state with new newFlashcardData -
    //but only the first index, as there's more than one, and the second is an object
    setData([...data, newFlashcardData[0]]);
    console.log(newFlashcardData);
  }
  // Rendering the App component
  return (
    <div className="myApp">
      <Header />
      <Form
        handleAnswerInput={handleAnswerInput}
        handleQuestionInput={handleQuestionInput}
        storeNewFlashcard={storeNewFlashcard}
        useState={useState}
        question={question}
        answer={answer}
      />
      {/* Pass the state = data and setData down to Flashcards */}
      <Flashcards flashcardData={data} setData={setData} />
      <Footer />
    </div>
  );
}

// // Exporting the App component as the default export
export default App;
