
import { useEffect, useMemo, useState } from 'react';

 // homework 12.2
function useFetchData(){
  const [respVal,setRespVal] = useState()
  

  useEffect(()=>{
      fetch(`https://dog.ceo/api/breed/akita/images/random`).then(val =>{
        return val.json()
      }).then(response => setRespVal(response.message) )   
      
    },[])
  
  return{respVal}
        
}

export default useFetchData