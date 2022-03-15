import { useState } from 'react';

 // homework 12.1
function useLocalSg(){

    const [valueInput,setValueInput] = useState("")
    const [listArr,setListArr] = useState(JSON.parse(localStorage.getItem("listData")) || [])
      
    function formClick(e){
      e.preventDefault()
      if(valueInput === "") return 
      setListArr([...listArr,valueInput])
      setValueInput("")
    }
    function saveButton(e){
      e.preventDefault()
      localStorage.setItem("listData",JSON.stringify(listArr))
    }
    function clearButton(e){
      e.preventDefault()
      localStorage.clear()
      setListArr([])
    }
  
    return {
      valueInput,
      setValueInput,
      listArr,
      formClick,
      saveButton,
      clearButton,
      setListArr
  
    }
  }

  export default useLocalSg