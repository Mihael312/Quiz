import React, { useEffect, useState } from "react";

const Question = ({ question, correctAnswer, incorrectAnswers, handleSelectAnswer }) => {
  const [mappedAnswers, setMappedAnswers] = useState([]);

  useEffect(() => {
    const mappedAnswers = incorrectAnswers.map((answer, index) => ({
      id: index + 1,
      value: answer,
    }));
    setMappedAnswers(mappedAnswers);
  }, [incorrectAnswers]);

  return (
    <div  className="text-light text-center m-2">
      <h1>{question}</h1>
      <div className="d-flex justify-content-center">
          <button className="btn btn-outline-danger m-2 p-2">{correctAnswer}</button>
          {mappedAnswers.map((answer) => (
          <button className="btn btn-outline-danger m-2 p-2" key={answer.id} onClick={() => handleSelectAnswer(answer.id)} >{answer.value} </button>
          ))}
      </div>
    </div>
  );
};

export default Question;
