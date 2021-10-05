import { useEffect, useState } from "react"
// simple function for loading data from fakeData
const LoadData = () =>{
    const [languages,setLanguages] = useState([]);
    useEffect(()=>{
        fetch("./fakeData.JSON")
        .then(res => res.json())
        .then(data => setLanguages(data))
    },[]);
    return [languages];
}
export default LoadData;