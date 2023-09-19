import CatsApi from "./CatsApi.jsx"
import {useState,useEffect} from "react"
function CatsList () {
    const [cat_breeds_arr,  setCat_Breeds_Arr]=useState([])
    console.log(cat_breeds_arr)
    useEffect(()=>{
        const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
        const options = {
             method: 'GET',
             headers: {
        'X-RapidAPI-Key': '06dac55145msh43ca0f365b5b73cp138cdfjsn37f31adbc82f',
        'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com'}
    };
        fetch(url, options)
        .then((response)=> response.json())
        .then(data=> setCat_Breeds_Arr(data))
        .catch(error=> console.log(error))
    },[])
    return(
        <div>
            <h1>All Cats</h1>
            {cat_breeds_arr.map((breedObj)=> {
                return (
                    <div>
                        <h3>{breedObj.breed}</h3>
                        <img
                            src={breedObj.img !== "Not found" ? breedObj.img : "https://cdn1.vectorstock.com/i/1000x1000/12/30/black-silhouette-cat-vector-9051230.jpg"}
                            alt={ breedObj.breed}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default CatsList
