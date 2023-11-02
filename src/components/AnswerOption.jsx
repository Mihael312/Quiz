const AnswerOption = ({ answer, onClick, index, clickedIndex, correctIndex }) => {
    return (
      <button
        onClick={() => onClick(index)}
        className={`text-light fs-2 fw-bold btn mx-3 px-3 ${
          clickedIndex !== null
            ? index === correctIndex
              ? 'btn-success'
              : index === clickedIndex
              ? 'btn-danger'
              : 'btn-outline-danger'
            : 'btn-outline-danger'
        }`}
        key={index}
        disabled={clickedIndex !== null}
      >
        {answer}
      </button>
    )
  }
  
  export default AnswerOption
  