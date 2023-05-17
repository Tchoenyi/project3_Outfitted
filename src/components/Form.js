import { useState } from "react";

const Form = ({setTemp, city, setCity}) => {

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData(city)
    }

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const fetchWeatherData = async (userCity) => {
        const url = new URL('https://api.openweathermap.org/data/2.5/weather')
        url.search = new URLSearchParams({
            appid: '858e91ce787ecbb0892786022791bda3',
            q: userCity,
            units: 'metric'
        });

        try {
            // fetch request
            const response = await fetch(url);
            const apiData = await response.json();
            setTemp(apiData.main.temp);
            setError(false)
        } catch (error) {
            setError(true);
        }
    }

    return( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="city" />
            <input type="text" id="city" onChange={handleChange} placeholder="Enter Your Location" value={city}/>
            <button>Submit</button>
            {
                error 
                ? <p>please try seacrching again</p>
                : null
            }
        </form>
        
    )
}

export default Form;