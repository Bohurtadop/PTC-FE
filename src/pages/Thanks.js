import React from 'react';
import './styles.css';
import FeelingFooter from '../components/FeelingFooter';
import QuestionsHeader from '../components/FeelingHeader';
import ThanksContainer from '../components/ThanksContainer';
import { useLocation } from 'react-router-dom';

function Thanks() {

    const location = useLocation();

    return (
        <div className='Content'>
            <QuestionsHeader companyName={location.state.companyName} />
            <br />
            <ThanksContainer />
            <FeelingFooter />
        </div>
    );
}

export default Thanks;