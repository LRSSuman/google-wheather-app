import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import axios from 'axios';
import Result from './components/Result';

function App() {
    const [input, setInput] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');

    const findWeather = async (e) => {
        e.preventDefault();
        const apiKey = '72db28db77fcab821faacf5b4ac7c646';
        const unit = 'metric';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`;
        const response = await axios.get(url);
        const temp = await response.data.main.temp;
        const weatherDesc = await response.data.weather[0].description;
        const icon = await response.data.weather[0].icon;
        const imageURL = `https://api.openweathermap.org/img/wn/${icon}@2x.png`;
        setTemp(temp);
        setDesc(weatherDesc);
        setIcon(imageURL);
        setInput('');
    };
    console.log(temp, desc, icon);

    return (
        <div className='App'>
            {temp === '' ? (
                <Input
                    setInput={setInput}
                    input={input}
                    findWeather={findWeather}
                />
            ) : (
                <h1>
                    <Result
                        temp={temp}
                        desc={desc}
                        image={icon}
                        setTemp={setTemp}
                    />
                </h1>
            )}
        </div>
    );
}

export default App;
