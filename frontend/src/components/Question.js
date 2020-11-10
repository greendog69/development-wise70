import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./stylesheets/Question.css";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

var totalScore = 0;
var clicked = 0;

function Question({ question, totalQuestions }) {
  const [{ user, token, quizScore }, dispatch] = useStateValue();
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const getTotalScore = (e) => {
    totalScore += parseInt(e.target.value);
    setScore(totalScore);
    clicked++;
    if (totalQuestions === clicked) {
      setShow(true);
    }
  };
  const completeSurvey = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_QUIZ_SCORE",
      quizScore: score,
    });
    history.push("/survey");
  };

  return (
    <div className="question__container">
      <div className="question">
        <h3>{question.q}</h3>
        <ul>
          {question.options.map((item) => (
            <li>
              <input
                type="radio"
                name={`question_option${question.optionIndex}`}
                value={item.value}
                onChange={getTotalScore}
              />{" "}
              <span className="question__option">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {show && (
        <Button
          variant="primary"
          size="lg"
          onClick={completeSurvey}
          className="complete__button"
        >
          Done
        </Button>
      )}
    </div>
  );
}

export default Question;
