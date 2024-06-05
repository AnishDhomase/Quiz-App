import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");
  function handlePageChange(event) {
    if (event.target.innerHTML === "Let's Go") setActivePage("custQuiz");
  }
  return (
    <div className="App">
      {activePage === "home" && (
        <HomePage>
          <Button
            onButtonClick={handlePageChange}
            bgClr="#012E91"
            pad="15px 20px"
          >
            Let's Go
          </Button>
        </HomePage>
      )}
      {activePage === "custQuiz" && <CustomizeQuizPage />}
      {activePage === "quiz" && <QuizPage />}
    </div>
  );
}

function HomePage({ children }) {
  return (
    <div className="home">
      <div className="content">
        <img src="answer (1).png" alt="logo"></img>
        {children}
      </div>
    </div>
  );
}
function CustomizeQuizPage() {
  return <div className="custQuiz">CustomizeQuiz Page</div>;
}
function QuizPage() {
  return <div className="quiz">Quiz Page</div>;
}

function Button({
  onButtonClick,
  children,
  txtSz = "20px",
  txtWt = "500",
  bgClr = "#88EEE1",
  txtClr = "#fff",
  brdr = "none",
  btnWidth = "100%",
  btnHeigth = "auto",
  brdrRad = "30px",
  pad = "10px 20px",
  maxWidth = "300px",
}) {
  const btnStyle = {
    backgroundColor: bgClr,
    color: txtClr,
    border: brdr,
    width: btnWidth,
    height: btnHeigth,
    borderRadius: brdrRad,
    fontSize: txtSz,
    fontWeight: txtWt,
    padding: pad,
    maxWidth: maxWidth,
  };
  return (
    <button onClick={(ev) => onButtonClick(ev)} style={btnStyle}>
      {children}
    </button>
  );
}

export default App;
