import React from 'react';
import { Input, Button } from '@material-ui/core';

const InputBox = ({ setInput, input, findWeather }) => {
    return (
        <div className='input-box'>
            <div className='inputBox-field'>
                <h1>Google Wheather App</h1>
                <p>Powered By</p>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJU49GdBbZk1UboA2Ohj98gdfkiaON3cKV9RTL6rLGVLCjNMmSG-QSS5Bk3XTKl1EEGSM&usqp=CAU'
                    alt='logo'
                />
                <form>
                    <Input
                        placeholder='Enter the City Name'
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <br />
                    <Button
                        variant='contained'
                        color='secondary'
                        type='submit'
                        onClick={findWeather}
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default InputBox;
