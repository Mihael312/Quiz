const Result = ({ correctAnswers, totalQuestions, onPlayAgain }) => {
    return (
      <div className="text-center justify-content-center">
        <p className="fs-3 text-light fw-bold">{`You got ${correctAnswers} out of ${totalQuestions} correct!`}</p>
        <button className="p-2 fs-2 fw-bold btn btn-danger" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    )
  }
  
  export default Result
  