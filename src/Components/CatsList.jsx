import CatsApi from "./CatsApi"
import {useState,useEffect} from "react"


function CatsList () {
    const [cat_breeds_arr,  setCat_Breeds_Arr]=useState([])
    console.log(cat_breeds_arr)
    useEffect(()=>{
      const fetchedData = CatsApi()
      setCat_Breeds_Arr(fetchedData)
    },[])
   
    return(
        <div>
            SMCC
        </div>
    )
}
export default CatsList