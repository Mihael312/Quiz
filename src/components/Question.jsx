import React, { useEffect, useState } from "react";

const Question = ({ question, correctAnswer, incorrectAnswers, onCorrectAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Combine correct and incorrect answers into a single array
    const allAnswers = [correctAnswer, ...incorrectAnswers];

    // Shuffle the array
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);

    // Find the index of the correct answer in the shuffled array
    const correctIndex = shuffled.findIndex((answer) => answer === correctAnswer);

    // Map the shuffled answers with unique IDs
    const mappedShuffledAnswers = shuffled.map((answer, index) => ({
      id: index + 1,
      value: answer,
    }));

    // Set the shuffled answers and correct answer index to state
    setShuffledAnswers(mappedShuffledAnswers);
    setCorrectAnswerIndex(correctIndex);
  }, [correctAnswer, incorrectAnswers]);

  const handleAnswerClick = (index) => {
    // Check if the question has already been answered
    if (isAnswered) {
      return;
    }

    // Set the selected answer index to state
    setSelectedAnswerIndex(index);

    // Check if the selected answer is correct
    if (index === correctAnswerIndex) {
      // Call the callback function to update correct answer count
      onCorrectAnswer();
    }

    // Set the question as answered
    setIsAnswered(true);
  };

  return (
    <div className=" text-light text-center m-2">
      <h1>{question}</h1>
      <div className="justify-content-center flex-column d-flex flex-sm-row my-4 px-5">
        {shuffledAnswers.map((answer, index) => (
          <button
            className={`w-100 m-2 p-2 btn btn-outline-danger${selectedAnswerIndex == null && "btn btn-outline-danger"}
              ${selectedAnswerIndex !== null && index === correctAnswerIndex && "btn btn-success"}
              ${selectedAnswerIndex !== null && index === selectedAnswerIndex && index !== correctAnswerIndex && "btn btn-danger"}`
            }
            key={answer.id}
            onClick={() => handleAnswerClick(index)}
            disabled={isAnswered} // Disable the button if the question has been answered
          >
            {answer.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
