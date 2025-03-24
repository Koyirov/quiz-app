import { useState, useEffect } from 'react';

const INTERVAL = 100;

function QuestionTimer ({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - INTERVAL);
        }, INTERVAL);

        return () => clearInterval(interval);
    },[]);

    return (
        <progress id="question-time" value={remainingTime} max={timeout}/>
    );
}

export default QuestionTimer;