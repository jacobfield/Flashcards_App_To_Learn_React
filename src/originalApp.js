import "./App.css";
//useState is a react hook, used to add state to functional components
import { useState } from "react";
import { v4 as uuid } from "uuid";
import logo192 from "../logo192.png";
import logo from "../logo512.png";
const initialFlashcards = [
  {
    id: "1",
    question: "What is the React component lifecycle?",
    answer:
      "The React component lifecycle refers to the different stages a component goes through during its lifespan, from initialization to unmounting. It consists of three main phases: mounting, updating, and unmounting.",
  },
  {
    id: "2",
    question: "What are 'props' in React?",
    answer: "Properties used to pass data from one component to another.",
  },
  {
    id: "4",
    question: "What are React hooks?",
    answer:
      "React hooks are functions that allow you to use state and other React features in functional components. They enable you to write reusable and stateful logic without using class components.",
  },
  {
    id: "5",
    question: "How do you pass 'props' to a child component?",
    answer:
      "By including them as attributes on the child component in the parent",
  },
  {
    id: "6",
    question: "What does the 'useState' hook do?",
    answer: "It allows you to add state to functional components",
  },
  {
    id: "3",
    question: "What are React props?",
    answer:
      "React props (short for properties) are a way to pass data from a parent component to its child components. They are read-only and provide a convenient way to configure and customize components.",
  },
  {
    id: "7",
    question: "What is 'state' in React?",
    answer: "A way to store and manipulate data that will be rendered.",
  },
  {
    id: "8",
    question: "What does 'lifting state up' refer to?",
    answer:
      "Moving state to a higher-level component to share data among siblings",
  },
  {
    id: "9",
    question: "How are events handled in React?",
    answer:
      "In React, events are handled using synthetic event objects, which are similar to native browser events but have consistent behavior across different browsers. Event handlers are defined as functions and attached to JSX elements using event attributes like 'onClick' or 'onChange'.",
  },
  {
    id: "10",
    question: "How does the Router work in React?",
    answer:
      "The React Router is a popular library used for routing in React applications. It allows you to define different routes and associate them with specific components. When the URL changes, the Router updates the rendered component based on the matching route.",
  },
  {
    id: "11",
    question: "What is server side rendering?",
    answer:
      "Dynamically generating HTML on the server before sending it to the browser.",
  },
  {
    id: "12",
    question: "What is server side rendering?",
    answer:
      "Dynamically generating HTML on the server before sending it to the browser.",
  },
  {
    id: "13",
    question: "What is meant by 'one-way data flow' in React?",
    answer: "Data can only flow from parent to child components",
  },
  {
    id: "14",
    question:
      "How is communication typically handled from parent to child in React?",
    answer: "Through props",
  },
  {
    id: "15",
    question:
      "How can a child component communicate back to its parent in React?",
    answer: "Through callback functions passed as props",
  },
];

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

// Form component for handling user input
// destructuring Props passed down from App
function Form({
  handleQuestionInput,
  handleAnswerInput,
  storeNewFlashcard,
  question,
  answer,
}) {
  // Rendering form elements for input and submission
  return (
    <form className="formClass">
      <span>Question:</span>
      <input
        type="text"
        className="inputBox questionInput"
        value={question}
        //  handleQuestionInput has no brackets, as it is being used as an event handler. The function will be invoked only when the value changes
        onChange={handleQuestionInput}
      />
      <span>Answer:</span>
      <input
        type="text"
        className="inputBox answerInput"
        value={answer}
        // handleAnswerInput has no brackets, as it is being used as an event handler. The function will be invoked only when the value changes
        onChange={handleAnswerInput}
      />
      {/* storeNewFlashcard has no brackets, as it is being used as an event handler. The function will be invoked only when the button is clicked */}
      <button onClick={storeNewFlashcard}>Add</button>
    </form>
  );
}
// Header component for displaying header content
function Header() {
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

// Flashcards component for displaying flashcard items
function Flashcards({ flashcardData, setData }) {
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

// Individual Flashcard component for displaying a single flashcard
// flashcardObject, onDelete are the propd that are pushed down to Flashcard
function Flashcard({ flashcardObject, onDelete }) {
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

// Footer component for displaying footer content
function Footer() {
  return (
    <>
      <div className="footer">
        Built with React
        <img
          src={logo192}
          className="footerImage"
          alt="footer logo"
          style={{ maxWidth: "15px", maxHeight: "15px" }}
        />
      </div>
    </>
  );
}
// Exporting the App component as the default export

export default App;
