import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import FeelingHeader from '../components/FeelingHeader';
import MoodQuestionContainer from '../components/MoodQuestionContainer';
import FeelingFooter from '../components/FeelingFooter';

function Feeling() {

    const [companyName, setCompanyName] = useState();


    useEffect(() => {
        axios.get('http://localhost:3001/companies').then((response) => {
            setCompanyName(response.data[0].name);
        })
    }, []);


    return (
        <div className='Content'>
            <FeelingHeader companyName={companyName} />
            <MoodQuestionContainer companyName={companyName} />
            <FeelingFooter />
        </div>
    );
}

export default Feeling;