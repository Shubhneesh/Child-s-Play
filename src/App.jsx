import React, { useEffect,useMemo, useState } from 'react'
import './index.css'
import $ from 'jquery'
import Trivia from './components/Trivia.jsx';
import Start from "./components/Start.jsx";
import Timer from "./components/Timer.jsx";

// setTimeout(() => console. log('Initial timeout!'))

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("badges");

  const data = [
    {
      id: 1,
      question: "In which direction does the sunrise?",
      answers: [
        {
          text: "West",
          correct: false,
        },
        {
          text: "East",
          correct: true,
        },
        {
          text: "North",
          correct: false,
        },
        {
          text: "South",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which day is observed as World Environment Day?",
      answers: [
        {
          text: "june 6",
          correct: true,
        },
        {
          text: "june 12",
          correct: false,
        },
        {
          text: "May 12",
          correct: false,
        },
        {
          text: "August 5",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How many planets are there in our solar system?",
      answers: [
        {
          text: "12",
          correct: false,
        },
        {
          text: "10",
          correct: false,
        },
        {
          text: "6",
          correct: false,
        },
        {
          text: "8",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "Bronze" },
        { id: 2, amount: "Bronze" },
        { id: 3, amount: "Silver" },
        { id: 4, amount: "Silver" },
        { id: 5, amount: "Silver" },
        { id: 6, amount: "Gold" },
        { id: 7, amount: "Gold" },
        { id: 8, amount: "Platinum" },
        { id: 9, amount: "Platinum" },
        { id: 10, amount: "King" },
        { id: 11, amount: "King" },
        { id: 12, amount: "Conqueror" }
      
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

