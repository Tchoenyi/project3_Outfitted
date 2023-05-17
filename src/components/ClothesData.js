import app from '../firebase';
import { onValue, ref, getDatabase} from 'firebase/database';
import { useEffect } from 'react';

const ClothesData = ({temp, setClothesObj}) => {
    
    useEffect( () => {
        const database = getDatabase(app);
        const dbRef = ref(database);

        onValue(dbRef, (dbResponse) => {
            setClothesObj(dbResponse.val());
        })
    }, []);

    return  temp ? (
        <div className="results">
            <p className="temp">The temperature in is: {temp}°C</p>
        </div>
    ) : (
        null
    )
}

export default ClothesData;