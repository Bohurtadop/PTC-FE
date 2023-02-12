import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, ProgressBar } from 'react-bootstrap';
import FeedbackContainer from '../components/FeedbackContainer';
import QuestionsHeader from '../components/FeelingHeader';
import RangeQuestionContainer from '../components/RangeQuestionContainer';
import FeelingFooter from '../components/FeelingFooter';
import ExtraFeedbackContainer from '../components/ExtraFeedbackContainer';
import './styles.css';

function Questions() {

    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    const [mood, setMood] = useState(location.state.mood);
    const [progress, setProgress] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answersData] = useState({});
    const [feedbackText, setFeedbackText] = useState('');

    const updateFeedbackText = (mood) => {
        switch (mood) {
            case 'veryunhappy':
                setFeedbackText('Oops.');
                break;
            case 'unhappy':
                setFeedbackText('Mmmmh...');
                break;
            case 'neutral':
                setFeedbackText('OK');
                break;
            case 'happy':
                setFeedbackText('Great!');
                break;
            case 'veryhappy':
                setFeedbackText('Awesome!');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/questions').then((response) => {
            setQuestions(response.data.sort((a, b) => 0.5 - Math.random()));
        });

        updateFeedbackText(mood);
        answersData['mood'] = mood;
    }, [params, answersData, mood]);

    const updateProgress = () => {
        let newProgress = 0;
        questions.forEach((element, index) => {
            if (answersData[element.text]) {
                newProgress += 20;
            }
        });
        setProgress(newProgress);
    }

    const setAnswer = (questionText, answer) => {
        answersData[questionText] = answer;
        updateProgress();
    }

    const setText = (value, questionType) => {
        answersData[`${questionType}-comment`] = value;
    }

    const setExtraFeedbackText = (value) => {
        answersData['Extra-feedback'] = value;
    }

    const handleSendClick = () => {
        axios.post('http://localhost:3001/answers', answersData);
        navigate('/thanks', { state: { companyName: location.state.companyName } });
    }

    const updateMood = (mood) => {
        setMood(mood);
        updateFeedbackText(mood);
        answersData['mood'] = mood;
    }

    return (
        <div className='Questions-content'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='Progress-bar-container'>
                <ProgressBar className='Questions-progress-bar' variant='success' animated now={progress} />
            </div>
            <QuestionsHeader companyName={location.state.companyName} />
            <FeedbackContainer updateMood={updateMood} feelingImage={location.state.feelingImage} feedbackText={feedbackText} />
            {
                questions ?
                    questions.map((question, index, array) => {
                        return (
                            <RangeQuestionContainer key={index} question={question} index={index} array={array} setAnswer={setAnswer} setText={setText} />
                        );
                    }) :
                    <></>
            }
            <ExtraFeedbackContainer setText={setExtraFeedbackText} />
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