export function Form({
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
      <button className="addButton" onClick={storeNewFlashcard}>
        Add
      </button>
    </form>
  );
}
