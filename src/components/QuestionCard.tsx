import React from "react";
import { AnswerObject } from "../App";
import "./QuestionCard.css";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="question-container">
      <p className="number">
        Question:{questionNr} / {totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            {console.log(answer)}
            <button
              className="answer-btn"
              answer-btn
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span className="answer-btn">{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
