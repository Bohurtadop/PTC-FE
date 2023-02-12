import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ProgressBar } from 'react-bootstrap';
import FeedbackContainer from '../components/FeedbackContainer';
import QuestionsHeader from '../components/FeelingHeader';
import RangeQuestionContainer from '../components/RangeQuestionContainer';
import FeelingFooter from '../components/FeelingFooter';
import './styles.css';

function Questions() {

    const location = useLocation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [answers, setAnswers] = useState([]);

    const testArray = [
        'First question',
        'Second question',
        'Third question',
        'Fourth question',
        'Fifth question'
    ];

    const updateProgress = () => {
        let newProgress = 0;
        answers.forEach((element, index) => {
            if (answers[index]) {
                newProgress += 20;
            }
        });
        setProgress(newProgress);
    }

    const setAnswer = (arrayPosition, answer) => {
        answers[arrayPosition] = answer;
        updateProgress();
    }

    const handleSendClick = () => {
        navigate('/thanks');
    }

    return (
        <div className='Questions-content'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='Progress-bar-container'>
                <ProgressBar className='Questions-progress-bar' variant='success' animated now={progress} />
            </div>
            <QuestionsHeader />
            <FeedbackContainer feelingImage={location.state.feelingImage} />
            {
                testArray.map((question, index, array) => {
                    return (
                        <RangeQuestionContainer key={index} question={question} index={index} array={array} setAnswer={setAnswer} value />
                    );
                })
            }
            <Button className='Send-questions-button' variant='outline-light' size='lg' disabled={progress === 100 ? false : true} onClick={handleSendClick}>
                <p className='Send-text'>Send</p>
                <span className="material-symbols-outlined">
                    arrow_forward
                </span>
            </Button>
            <FeelingFooter />
        </div>
    );
}

export default Questions;