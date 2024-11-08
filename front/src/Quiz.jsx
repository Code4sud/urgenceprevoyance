import React, { useState, useEffect } from "react";
import risk1 from "./assets/risk1.jpeg";
import risk2 from "./assets/risk2.jpeg";
import risk3 from "./assets/risk3.jpeg";
import risk4 from "./assets/risk4.jpeg";
import risk5 from "./assets/risk5.jpeg";
import risk6 from "./assets/risk6.jpeg";
import risk7 from "./assets/risk7.jpeg";
import risk8 from "./assets/risk8.jpeg";
import risk9 from "./assets/risk9.jpeg";
import risk10 from "./assets/risk10.jpeg";
import risk11 from "./assets/risk11.jpeg";
import risk12 from "./assets/risk12.jpeg";
import risk13 from "./assets/risk13.jpeg";
import risk14 from "./assets/risk14.jpeg";
import risk15 from "./assets/risk15.jpeg";
import risk16 from "./assets/risk16.jpeg";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  useEffect(() => {
    const initialQuestions = [
      {
        imageUrl: risk1,
        isRisk: false,
        preventionMessage: "Aucun risque n'est présent sur cette image.",
      },
      {
        imageUrl: risk2,
        isRisk: false,
        preventionMessage: "Aucun risque n'est présent sur cette image.",
      },
      {
        imageUrl: risk3,
        isRisk: true,
        preventionMessage:
          "Un risque est présent sur cette image : risque d'inondation.",
      },
      {
        imageUrl: risk4,
        isRisk: true,
        preventionMessage: "Cette image représente un départ d'incendie.",
      },
      {
        imageUrl: risk5,
        isRisk: true,
        preventionMessage: "Des pierres risquent de tomber sur la route.",
      },
      {
        imageUrl: risk6,
        isRisk: true,
        preventionMessage: "Cette image présente une inondation.",
      },
      {
        imageUrl: risk7,
        isRisk: true,
        preventionMessage: "Cette image présente un éboulement.",
      },
      {
        imageUrl: risk8,
        isRisk: true,
        preventionMessage: "Cette image présente une inondation.",
      },
      {
        imageUrl: risk9,
        isRisk: false,
        preventionMessage: "Aucun risque n'est présent sur cette image.",
      },
      {
        imageUrl: risk10,
        isRisk: false,
        preventionMessage: "Aucun risque n'est présent sur cette image.",
      },
      {
        imageUrl: risk11,
        isRisk: true,
        preventionMessage:
          "Un risque est présent sur cette image : risque d'éboulement.",
      },
      {
        imageUrl: risk12,
        isRisk: true,
        preventionMessage: "Cette image représente un départ d'incendie.",
      },
      {
        imageUrl: risk13,
        isRisk: true,
        preventionMessage: "Cette image représente une image innondée.",
      },
      {
        imageUrl: risk14,
        isRisk: true,
        preventionMessage: "Cette image présente un éboulement.",
      },
      {
        imageUrl: risk15,
        isRisk: false,
        preventionMessage: "Aucun risque n'est présent sur cette image.",
      },
      {
        imageUrl: risk16,
        isRisk: true,
        preventionMessage: "Cette image présente un orage violent.",
      },
    ];

    setQuestions(shuffleArray(initialQuestions).slice(0, 8));
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (isRisk) => {
    if (isRisk === questions[currentQuestion].isRisk) {
      setScore(score + 1);
      handleNextQuestion();
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsAnswerCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <h1>Quiz Page</h1>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {showScore ? (
        <div className="score-section">
          <h2>
            Votre score est {score} sur {questions.length}
          </h2>
        </div>
      ) : (
        <div className="question-section">
          {isAnswerCorrect === null ? (
            <>
              <div className="image-container">
                {questions.length > 0 && (
                  <img
                    src={questions[currentQuestion].imageUrl}
                    alt="Quiz"
                    className="quiz-image"
                  />
                )}
              </div>
              <div className="answer-buttons">
                <button
                  className="answer-button"
                  onClick={() => handleAnswer(false)}
                >
                  Ne présente pas de risque
                </button>
                <button
                  className="answer-button"
                  onClick={() => handleAnswer(true)}
                >
                  Présente un risque
                </button>
              </div>
            </>
          ) : (
            <div className="prevention-message">
              <p style={{ color: "black" }}>
                {questions[currentQuestion].preventionMessage}
              </p>
              <button className="next-button" onClick={handleNextQuestion}>
                Suivant
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
