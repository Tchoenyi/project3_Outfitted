const ClothesDisplay = ({filteredObject}) => {
    return(
        <section className='wrapper'>
            {
                filteredObject.length === undefined || filteredObject[1] === undefined
                    ? (<h2>Outfit Loading....</h2>)
                    : (<div>
                        <h2>Here is your outfit for today</h2>
                        <ul>
                            {
                                filteredObject.map((indivisualObj) => {
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
        </section>
    )
}

export default ClothesDisplay;