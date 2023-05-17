import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ClothesData from './components/ClothesData';
import ClothesDisplay from './components/ClothesDisplay';
import FilteredData from './components/FilteredData';

function App() {

  const [filteredObject, setFilteredObject] = useState([]);
  const [temp, setTemp] = useState('')
  const [clothesObj, setClothesObj] = useState([]);
  
  return (
    <div className="App">
      <h1>Welcome To OutFitted</h1>
      
      
      <Form
          setTemp={setTemp}
      />
      <ClothesData 
          temp={temp}
          setClothesObj={setClothesObj}
      />
      <FilteredData 
          temp={temp}
          clothesObj={clothesObj}
          setFilteredObject={setFilteredObject}
      />
      <ClothesDisplay 
        temp={temp}
        filteredObject={filteredObject}
      />
      <footer>
        <p>Made by Tenzin Choenyi at Juno College</p>
      </footer>
    </div>
  );
}

export default App;