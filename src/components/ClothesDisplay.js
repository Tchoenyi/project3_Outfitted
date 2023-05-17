const ClothesDisplay = ({temp, filteredObject}) => {
    
    console.log(filteredObject);
    return(
        <section className='wrapper'>
            {
                filteredObject.length === undefined || filteredObject[1] == undefined
                    ? (<h2>Outfit Loading....</h2>)
                    : (<div>
                        <h2>Here is your outfit for today</h2>
                        <ul>
                            {
                                filteredObject.map((indivisualObj) => {
                                    console.log(indivisualObj, "Indiv");
                                    const ObjKey = Object.keys(indivisualObj); 
                                    
                                    let randomNum = (Math.floor(Math.random() * (ObjKey.length - 1)));
                                    
                                    console.log(ObjKey, "KEy Array");
                                    console.log(randomNum);
                                    console.log(ObjKey[randomNum], 'Key');
                                    
                                    console.log(indivisualObj[ObjKey[randomNum]].url);
                                    return(
                                        <li key={ObjKey[randomNum]}>
                                            <img src={indivisualObj[ObjKey[randomNum]].url}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>)
            }
        </section>
    )
}

export default ClothesDisplay;