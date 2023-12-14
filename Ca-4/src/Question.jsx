/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Question({ isLightmode }) {
  const questions = [
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "Server-side framework", isCorrect: false },
        { id: 1, text: "user interface framework", isCorrect: true },
        { id: 2, text: "both a and b", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
      text: "React.js is written in which of the following languages?",
      options: [
        { id: 0, text: "JavaScript", isCorrect: true },
        { id: 1, text: "Java", isCorrect: false },
        { id: 2, text: "C", isCorrect: false },
        { id: 3, text: "C++", isCorrect: false },
      ],
    },
    {
      text: "What is a state in React?",
      options: [
        { id: 0, text: "A permanent storage.", isCorrect: true },
        { id: 1, text: "Internal storage of the component.", isCorrect: false },
        { id: 2, text: "External storage of the component.", isCorrect: false },
        { id: 3, text: "None of the above.", isCorrect: false },
      ],
    },
    {
      text: "What is the return value of the useState hook?",
      options: [
        { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
        { id: 1, text: "Current State", isCorrect: false },
        { id: 2, text: "Function updating the current state", isCorrect: false },
        { id: 3, text: "UseState returns nothing", isCorrect: false },
      ],
    },
    {
      text: "How many elements can a valid React component return?",
      options: [
        { id: 0, text: "1", isCorrect: true },
        { id: 1, text: "2", isCorrect: false },
        { id: 2, text: "3", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCount) => prevCount + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIsHighlighted(false);
  };

  const handleHighlight = () => {
    setIsHighlighted(true);
  };

  const handleUnhighlight = () => {
    setIsHighlighted(false);
  };

  const calculatePercentage = () => {
    if (questions.length === 0) {
      return 0;
    }

    return (correctAnswers / questions.length) * 100;
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <p id='num-ques'>
            Question {currentQuestionIndex + 1} out of {questions.length}
          </p>
          <div id='prim-div'>
            <div
              id='sec-div'
              style={{ backgroundColor: isLightmode ? 'rgba(221, 182, 151, 0.77)' : '#000' }}
            >
              <p
                id='question'
                style={{ color: isHighlighted ? 'red' : (isLightmode ? 'inherit' : 'white') }}
              >
                {questions[currentQuestionIndex].text}
              </p>
              <ul>
                {questions[currentQuestionIndex].options.map((option) => (
                  <li key={option.id}>
                    <button
                      className={isLightmode ? 'light-button' : 'dark-button'}
                      onClick={() => handleOptionClick(option.isCorrect)}
                    >
                      {option.text}
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <button className='high' onClick={handleHighlight}>
                  Highlight
                </button>
                <button className='high' onClick={handleUnhighlight}>
                  Unhighlight
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id='mainreslut-div'>
          <div id='result-div'>
            <p>Total Questions: {questions.length}</p>
            <p>Correct Answers: {correctAnswers}</p>
            <p>Percentage: {calculatePercentage()}%</p>
            <button id='result-but' onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
