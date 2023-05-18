import app from '../firebase';
import { onValue, ref, getDatabase} from 'firebase/database';
import { useEffect } from 'react';

const ClothesData = ({temp, setClothesArray, city}) => {
    
    useEffect( () => {
        const database = getDatabase(app);
        const dbRef = ref(database);

        onValue(dbRef, (dbResponse) => {
            setClothesArray(dbResponse.val());
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return  temp ? (
        <div className="results">
            <p className="temp">The temperature in {city} is: {temp}°C</p>
        </div>
    ) : (
        null
    )
}

export default ClothesData;