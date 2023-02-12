import React from 'react';
import './styles.css';
import FeelingHeader from '../components/FeelingHeader';
import MoodQuestionContainer from '../components/MoodQuestionContainer';
import FeelingFooter from '../components/FeelingFooter';

function Feeling() {

    return (
        <div className='Content'>
            <FeelingHeader />
            <MoodQuestionContainer />
            <FeelingFooter />
        </div>
    );
}

export default Feeling;