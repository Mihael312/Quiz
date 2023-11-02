import { useEffect, useState } from 'react'
import he from 'he'
import QuestionHeader from './QuestionHeader'
import AnswerOption from './AnswerOption'

const Question = ({ onAnswerClick }) => {
  const [answers, setAnswers] = useState([])
  const [questions, setQuestions] = useState('')
  const [correctIndex, setCorrectIndex] = useState(-1)
  const [clickedIndex, setClickedIndex] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        setQuestions(he.decode(data.results[0].question))
        const allAnswers = [...data.results[0].incorrect_answers, data.results[0].correct_answer]
        const shuffledAnswers = [...allAnswers].sort(() => Math.random() - 0.5)
        setAnswers(shuffledAnswers)
        setCorrectIndex(shuffledAnswers.indexOf(data.results[0].correct_answer))
      })
      .catch(error => console.error(error))
  }, [])

  const handleAnswerClick = (index) => {
    if (clickedIndex === null) {
      setClickedIndex(index)
      if (index === correctIndex) {
        setCorrectIndex(index)
        onAnswerClick(true)
      } else {
        onAnswerClick(false)
      }
    }
  }

  return (
    <div className="py-3 my-5">
      <QuestionHeader question={questions} />
      <div className="d-flex justify-content-center gap-3 py-5 flex-md-row flex-column">
        {answers.map((answer, index) => (
          <AnswerOption
            answer={he.decode(answer)}
            onClick={handleAnswerClick}
            index={index}
            clickedIndex={clickedIndex}
            correctIndex={correctIndex}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Question
