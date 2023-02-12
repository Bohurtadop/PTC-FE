import React from 'react';
import './styles.css';
import FeelingFooter from '../components/FeelingFooter';
import QuestionsHeader from '../components/FeelingHeader';
import ThanksContainer from '../components/ThanksContainer';

function Thanks() {

    return (
        <div className='Content'>
            <QuestionsHeader />
            <br />
            <ThanksContainer />
            <FeelingFooter />
        </div>
    );
}

export default Thanks;