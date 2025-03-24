import { useState, useCallback } from 'react';

import QUESTIONS from '../questions';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [selectedAnswer, ...prevUserAnswers]
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers}/>
    }

    return (
        <div id="quiz">
            <div id="questions">
                <Question
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            </div>
        </div>
    );
}

export default Quiz;