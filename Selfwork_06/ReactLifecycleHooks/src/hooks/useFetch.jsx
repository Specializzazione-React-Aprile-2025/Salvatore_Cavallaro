
import { useState, useEffect } from "react";


function useFetch(url) {
    
    const [data, setData] = useState([]);


    useEffect(()=>{
      if (!url) return;
      
  
      async function fetchData(){
        try{
            const response = await fetch(url);
    
            const json = await response.json();
            setData(json.results);
            console.log(json.results);
            
        } catch(error){
            console.log("Errore: " + error);
            
        }

    }
    
    fetchData();
    
}, [url]);

    return data;
  }

export default useFetch;