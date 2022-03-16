
import { useEffect, useState } from 'react';

 // homework 12.2
function useFetchData(){
  const [respVal,setRespVal] = useState()
  const Names = ["akita","beagle","malamute","husky"]
  useEffect(()=>{
      fetch(`https://dog.ceo/api/breed/${Names.splice(parseInt( Math.random()*Names.length),1)}/images/random`).then(val =>{
        return val.json()
      }).then(response => setRespVal(response.message) )   
      
    },[])
  
  return{respVal}
        
}

export default useFetchData