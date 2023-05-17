import {useEffect} from 'react';

const FilteredData = ({temp, setFilteredObject, clothesObj}) => {

    useEffect( () => {
        let filteredClothesObject = [];
        let randomNum = String(Math.floor(Math.random() * 100) + 10);
        console.log(clothesObj.WinterJackets);
        if (temp >= '25') {
            filteredClothesObject.push(clothesObj.Shorts, clothesObj.Tshirts, clothesObj.Shoes) 
        } else if (temp >= '20') {
            if (randomNum[0] % 2 === 0) {
                filteredClothesObject.push(clothesObj.Shorts, clothesObj.Tshirts, clothesObj.Shoes)
                if (randomNum[1] % 2 === 0) {
                    filteredClothesObject.push(clothesObj.Sweater);
                }
            } else { 
                filteredClothesObject.push(clothesObj.Pants, clothesObj.Tshirts, clothesObj.Shoes)
                if (randomNum[1] % 2 === 0) {
                    filteredClothesObject.push(clothesObj.Sweater);
                }
            }
        } else if (temp >= '15') {
            filteredClothesObject.push(clothesObj.Pants, clothesObj.Tshirts, clothesObj.Shoes)
            if (randomNum[0] % 2 === 0) {
                filteredClothesObject.push(clothesObj.Sweater);
            } else {
                if (randomNum[1] % 2 === 0) {
                    filteredClothesObject.push(clothesObj.LightJackets);
                }
            }
        } else if (temp >= '10') {
            filteredClothesObject.push(clothesObj.Pants, clothesObj.Tshirts, clothesObj.Shoes)
            if (randomNum[0] % 2 === 0) {
                filteredClothesObject.push(clothesObj.Sweater);
                if (randomNum[1] % 2 === 0) {
                    filteredClothesObject.push(clothesObj.LightJackets); 
                }
            } else {
                filteredClothesObject.push(clothesObj.LightJackets) ;
            }
        } else if (temp >= '5') {
            filteredClothesObject.push(clothesObj.Pants, clothesObj.Tshirts, clothesObj.Shoes)
            console.log(filteredClothesObject, '5 or more');
            if (randomNum[0] % 2 === 0) {
                filteredClothesObject.push(clothesObj.Sweater);
                filteredClothesObject.push(clothesObj.Jackets); 
            } else {
                filteredClothesObject.push(clothesObj.WinterJackets);
            }
        } else {
            filteredClothesObject.push(clothesObj.Pants, clothesObj.Tshirts, clothesObj.Shoes, clothesObj.Sweater, clothesObj.WinterJackets)
        }
        setFilteredObject(filteredClothesObject);
    }, [temp]); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <>
        </>
    )
}

export default FilteredData;