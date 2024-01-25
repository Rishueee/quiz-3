import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Component.css";
import Mainpage from "./Mainpage";

const Output = (props) => {
  const [show, setShow] = useState(true);
  const {
    score,
    totalQuestions,
    attemptedQuestions,
    correctAnswers,
    wrongAnswers,
  } = props;

  return (
    <>
      {show ? (
        <div>
          <h2 className="h">Result</h2>
          <div className="output">
            <p className="h2">Your score is {score}</p>
            <div className="content">
              <p className="h3">Total no. of questions</p>
              <p className="res">
                <b>{totalQuestions}</b>
              </p>
              <p className="h3">Number of attempted questions</p>
              <p className="res">
                <b>{attemptedQuestions}</b>
              </p>
              <p className="h3">Number of correct answers</p>
              <p className="res">
                <b>{correctAnswers}</b>
              </p>
              <p className="h3">Number of wrong answers</p>
              <p className="res">
                <b>{wrongAnswers}</b>
              </p>
            </div>
          </div>
          <div className="btn">
            <button className="ag" onClick={() => setShow(false)}>
              Play Again
            </button>
            <Link to="/">
              <button className="back">Back to home</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Mainpage />
        </div>
      )}
    </>
  );
};

export default Output;
