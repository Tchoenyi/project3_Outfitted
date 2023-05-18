const ClothesDisplay = ({filteredClothesArray}) => {
    return(
        <div className='wrapper'>
            {
                filteredClothesArray.length === undefined || filteredClothesArray[1] === undefined
                    ? (<h2>Outfit Loading....</h2>)
                    : (<div className="displayItems">
                        <h2>Here is your outfit for today</h2>
                        <ul>
                            {
                                filteredClothesArray.map((indivisualObj) => {
                                    const ObjKey = Object.keys(indivisualObj); 
                                    let randomNum = (Math.floor(Math.random() * (ObjKey.length)));
                                    return(
                                        <li key={ObjKey[randomNum]}>
                                            <img src={indivisualObj[ObjKey[randomNum]].url} alt={indivisualObj[ObjKey[randomNum]].alt}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>)
            }
        </div>
    )
}

export default ClothesDisplay;