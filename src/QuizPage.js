import { useState } from "react";
import { ques } from "./App";

export function QuizPage({ numberOfQues, catArr }) {
  const [activeQuesNum, setActiveQuesNum] = useState(1);
  const [numberAttemptedOfQues, setNumberAttemptedOfQues] = useState(0);

  const quesCategoryName = catArr.field;
  const catQuesArr = catArr.questions.slice(0, numberOfQues);
  let percentQuesCovered = Math.round((activeQuesNum * 100) / numberOfQues);
  percentQuesCovered = percentQuesCovered.toString();
  percentQuesCovered = percentQuesCovered.toString() + "%";

  return (
    <div className="home quiz">
      <div className="content">
        <h3 className="quesCategory">Question on {quesCategoryName}</h3>
        <div className="progressBar">
          <div className="value" style={{ width: percentQuesCovered }}></div>
        </div>
        <h5 className="quesNumStatus">
          Question {activeQuesNum} of {numberOfQues}
        </h5>
        <h2 className="quesDesc">{catQuesArr[activeQuesNum - 1].question}</h2>
        <ul className="quesOption">
          {catQuesArr[activeQuesNum - 1].optionsArray.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <div className="quesNavigation">
          {activeQuesNum !== 1 && (
            <button onClick={() => setActiveQuesNum(activeQuesNum - 1)}>
              {" "}
              👈🏻Previous{" "}
            </button>
          )}
          <button className="submit"> Submit Quiz </button>
          {activeQuesNum !== numberOfQues && (
            <button onClick={() => setActiveQuesNum(activeQuesNum + 1)}>
              {" "}
              Next 👉🏻{" "}
            </button>
          )}
        </div>
        <footer>
          {numberAttemptedOfQues} number of questions attempted out of{" "}
          {numberOfQues}
        </footer>
      </div>
    </div>
  );
}
