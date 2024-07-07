import React from 'react';
import { Button } from '@material-ui/core';

const Result = ({ temp, desc, image, setTemp }) => {
    return (
        <div className='result'>
            <div className='result-box'>
                <h1>Temp:{temp}C</h1>
                <p>{desc}</p>
                <img src={image} alt='icon' />
                <br />
                <Button
                    variant='contained'
                    color='default'
                    onClick={() => setTemp('')}
                >
                    click me
                </Button>
            </div>
        </div>
    );
};

export default Result;
