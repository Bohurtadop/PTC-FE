import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';

function PageNotFound() {
    return (
        <div className='Content'>
            <h1 className='Page-not-found-title'>Page not found</h1>
            <br />
            <Button variant='outline-light' href='/feeling'>Go to home</Button>
        </div>
    );
}

export default PageNotFound;