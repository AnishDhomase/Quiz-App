export function CustomizeQuizPage({
  numberOfQues = 3,
  onNumOfQuesChange,
  children,
}) {
  return (
    <div className="home custQuiz">
      <div className="content">
        <label>Select Number of Questions</label>
        <select
          className="numberOfQues"
          value={numberOfQues}
          onChange={(ev) => onNumOfQuesChange(Number(ev.target.value))}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
          <option value={10}>10</option>
        </select>
        {children}
      </div>
    </div>
  );
}
