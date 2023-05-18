import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ClothesData from './components/ClothesData';
import ClothesDisplay from './components/ClothesDisplay';
import FilteredData from './components/FilteredData';
import Footer from './components/Footer';

function App() {

  const [filteredClothesArray, setFilteredClothesArray] = useState([]);
  const [temp, setTemp] = useState('')
  const [city, setCity] = useState('');
  const [clothesArray, setClothesArray] = useState([]);
  
  return (
    <body className='App'>
      <header>
        <h1>Welcome To OutFitted</h1>
      </header>

      <main>
        <section className='form'>
          <Form
            city={city}
            setCity={setCity}
            setTemp={setTemp}
          />
        </section>
        <section className='clothesData'>
          <ClothesData 
            city={city}
            temp={temp}
            setClothesArray={setClothesArray}
          />
        </section>
        <section className='filteredData'>
          <FilteredData 
            city={city}
            temp={temp}
            clothesArray={clothesArray}
            setFilteredClothesArray={setFilteredClothesArray}
          />
        </section>
        <section className='clothesDisplay'>
          <ClothesDisplay 
          filteredClothesArray={filteredClothesArray}
          />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;