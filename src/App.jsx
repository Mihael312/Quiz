import { useState } from 'react'
import Navbar from './components/Navbar'
import Question from './components/Question'
import Result from './components/Result'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(prevCorrectAnswers => prevCorrectAnswers + 1)
    }
  }

  const handlePlayAgain = () => {
    setCorrectAnswers(0)
    setShowResult(false)
  }

  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Navbar />
      {!showResult ? (
        <>
          <Question onAnswerClick={handleAnswerClick} />
          <Question onAnswerClick={handleAnswerClick} />
          <Question onAnswerClick={handleAnswerClick} />
          <Question onAnswerClick={handleAnswerClick} />
          <Question onAnswerClick={handleAnswerClick} />
          <div className="d-flex justify-content-center">
            <button
              className="m-5 p-2 fs-2 fw-bold btn btn-danger"
              onClick={() => setShowResult(true)}
            >
              Finish Quiz
            </button>
          </div>
        </>
      ) : (
        <Result
          correctAnswers={correctAnswers}
          totalQuestions={5} // Change this to the total number of questions
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  )
}

export default App
