import {useEffect} from 'react';

const FilteredData = ({temp, setFilteredClothesArray, clothesArray}) => {

    useEffect( () => {
        let filteredClothesArray = [];
        let randomNum = String(Math.floor(Math.random() * 100) + 10);
        if (temp >= '25') {
            filteredClothesArray.push(clothesArray.Shorts, clothesArray.Tshirts, clothesArray.Shoes) 
        } else if (temp >= '20') {
            if (randomNum[0] % 2 === 0) {
                filteredClothesArray.push(clothesArray.Shorts, clothesArray.Tshirts, clothesArray.Shoes)
                if (randomNum[1] % 2 === 0) {
                    filteredClothesArray.push(clothesArray.Sweater);
                }
            } else { 
                filteredClothesArray.push(clothesArray.Pants, clothesArray.Tshirts, clothesArray.Shoes)
                if (randomNum[1] % 2 === 0) {
                    filteredClothesArray.push(clothesArray.Sweater);
                }
            }
        } else if (temp >= '15') {
            filteredClothesArray.push(clothesArray.Pants, clothesArray.Tshirts, clothesArray.Shoes)
            if (randomNum[0] % 2 === 0) {
                filteredClothesArray.push(clothesArray.Sweater);
            } else {
                if (randomNum[1] % 2 === 0) {
                    filteredClothesArray.push(clothesArray.LightJackets);
                }
            }
        } else if (temp >= '10') {
            filteredClothesArray.push(clothesArray.Pants, clothesArray.Tshirts, clothesArray.Shoes)
            if (randomNum[0] % 2 === 0) {
                filteredClothesArray.push(clothesArray.Sweater);
                if (randomNum[1] % 2 === 0) {
                    filteredClothesArray.push(clothesArray.LightJackets); 
                }
            } else {
                filteredClothesArray.push(clothesArray.LightJackets) ;
            }
        } else if (temp >= '5') {
            filteredClothesArray.push(clothesArray.Pants, clothesArray.Tshirts, clothesArray.Shoes)
            if (randomNum[0] % 2 === 0) {
                filteredClothesArray.push(clothesArray.Sweater);
                filteredClothesArray.push(clothesArray.Jackets); 
            } else {
                filteredClothesArray.push(clothesArray.WinterJackets);
            }
        } else {
            filteredClothesArray.push(clothesArray.Pants, clothesArray.Tshirts, clothesArray.Shoes, clothesArray.Sweater, clothesArray.WinterJackets)
        }
        setFilteredClothesArray(filteredClothesArray);
    }, [temp]); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <>
        </>
    )
}

export default FilteredData;