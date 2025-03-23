import { useState } from 'react';

import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';

function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random - 0.5);
    const quizIsComplete = QUESTIONS.length - 1 === activeQuestionIndex;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [selectedAnswer, ...prevUserAnswers]
        });
    }

    if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <div id="questions">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Quiz;