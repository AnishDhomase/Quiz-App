import { useState } from "react";
import { Button } from "./Button";

export function QuizPage({ onPageChange, numberOfQues, catArr }) {
  const [quizSubmitStatus, setQuizSubmitStatus] = useState(false);
  const [activeQuesNum, setActiveQuesNum] = useState(1);
  const [quesAnswerStatus, setQuesAnswerStatus] = useState(
    Array.from({ length: numberOfQues }, () => 0)
  );
  const numOfAttemptedQues = quesAnswerStatus.reduce(
    (acc, currentValue) => (currentValue !== 0 ? acc + 1 : acc + 0),
    0
  );

  const quesCategoryName = catArr.field;
  const catQuesArr = catArr.questions.slice(0, numberOfQues);
  let percentQuesCovered = Math.round((activeQuesNum * 100) / numberOfQues);
  percentQuesCovered = percentQuesCovered.toString();
  percentQuesCovered = percentQuesCovered.toString() + "%";

  const correctAns = catQuesArr[activeQuesNum - 1].correctAnswer;
  const numOfCorrectAns = quesAnswerStatus.reduce(
    (acc, currentValue) => (currentValue === 1 ? acc + 1 : acc + 0),
    0
  );

  function handleAnswer(choosenOption) {
    if (quesAnswerStatus[activeQuesNum - 1] !== 0) {
      alert("You have already answered this question!");
      return;
    }

    let tempQuesStatusArr = [...quesAnswerStatus];
    if (choosenOption === correctAns) {
      tempQuesStatusArr[activeQuesNum - 1] = 1;
      setQuesAnswerStatus((state) => tempQuesStatusArr);
    } else {
      tempQuesStatusArr[activeQuesNum - 1] = choosenOption;
      setQuesAnswerStatus((state) => tempQuesStatusArr);
    }
  }

  function handleSubmitQuiz() {
    setQuizSubmitStatus(true);
  }

  return (
    <div className="home quiz">
      <div className="content">
        {quizSubmitStatus === false && (
          <>
            <h3 className="quesCategory">Question on {quesCategoryName}</h3>
            <div className="progressBar">
              <div
                className="value"
                style={{ width: percentQuesCovered }}
              ></div>
            </div>
            <h5 className="quesNumStatus">
              Question {activeQuesNum} of {numberOfQues}
            </h5>
            <h2 className="quesDesc">
              {catQuesArr[activeQuesNum - 1].question}
            </h2>
            <ul className="quesOption">
              {catQuesArr[activeQuesNum - 1].optionsArray.map((option) => (
                <li
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`${
                    quesAnswerStatus[activeQuesNum - 1] !== 0 &&
                    option === correctAns &&
                    "right"
                  } ${
                    quesAnswerStatus[activeQuesNum - 1] !== 1 &&
                    quesAnswerStatus[activeQuesNum - 1] !== 0 &&
                    option === quesAnswerStatus[activeQuesNum - 1] &&
                    "wrong"
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="quesNavigation">
              {activeQuesNum !== 1 && (
                <button onClick={() => setActiveQuesNum(activeQuesNum - 1)}>
                  {" "}
                  👈🏻Previous{" "}
                </button>
              )}
              <button onClick={handleSubmitQuiz} className="submit">
                Submit Quiz
              </button>
              {activeQuesNum !== numberOfQues && (
                <button onClick={() => setActiveQuesNum(activeQuesNum + 1)}>
                  {" "}
                  Next 👉🏻{" "}
                </button>
              )}
            </div>
            <footer>
              {numOfAttemptedQues !== numberOfQues
                ? `${numOfAttemptedQues} questions attempted out of ${numberOfQues}`
                : `You have attempted all ${numberOfQues} question!`}
            </footer>
          </>
        )}
      </div>
      {quizSubmitStatus === true && (
        <div className="content quizContent">
          <h1>Quiz Result</h1>
          <h2>
            Score {numOfCorrectAns}/{numberOfQues}
          </h2>
          <div className="summary">
            <h5>Correct : {numOfCorrectAns}</h5>
            <h5>Skipped : {numberOfQues - numOfAttemptedQues}</h5>
            <h5>
              Incorrect :
              {numberOfQues -
                numOfCorrectAns -
                (numberOfQues - numOfAttemptedQues)}
            </h5>
          </div>
          <Button
            bgClr="rgb(169, 127, 255)"
            pad="15px 20px"
            margin="50px 0 0 0"
            onButtonClick={onPageChange}
          >
            Start Another Quiz
          </Button>
        </div>
      )}
    </div>
  );
}
