import React, { useEffect, useState } from "react";
import he from "he";
import Question from "./Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        data.results = data.results.map((question, index) => {
          question.id = index + 1;
          return question;
        });
        setQuestions(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCorrectAnswer = () => {
    setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
  };

    const handleRefreshClick = () => {
      window.location.reload();
    };

  return (
    <div>
      {questions &&
        questions.map((question, index) => (
          <div key={index}>
            <Question
              question={he.decode(question.question)}
              correctAnswer={he.decode(question.correct_answer)}
              incorrectAnswers={question.incorrect_answers}
              onCorrectAnswer={handleCorrectAnswer}
            />
          </div>
        ))}
      <div className="text-center mt-3">
        <h2 className="text-success m-5">Result: {correctAnswers} correct answers</h2>
        <button className="btn btn-danger m-5" onClick={handleRefreshClick}> Play Again! </button>
      </div>
    </div>
  );
};

export default Quiz;
