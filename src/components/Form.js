import { useState } from "react";

const Form = ({setTemp}) => {

    const [userTemp, setUserTemp] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTemp(userTemp)
    }

    const handleChange = (e) => {
        setUserTemp(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="temp"></label>
            <input type="text" id="temp" onChange={handleChange} placeholder="Enter the temperature" value={userTemp}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form;