import { useReducer, useState } from 'react';

 // homework 12.4
function reducer(state,action){
  if(action.type === "add"){
    return [
      ...state,
      action.payload.valueInput

    ]
    
  }

  if(action.type === "delete"){
   return state.filter((el,index) => index !== action.payload.deletId )

  }

  if(action.type === "delete all"){ return [] }
    

}


 // homework 12.1
 function useLocalSg(){
   // homework 12.4
  const [listArr,dispatch] = useReducer(reducer,JSON.parse(localStorage.getItem("listData")) || [])
  const [valueInput,setValueInput] = useState("")
    
  function formClick(e){
    e.preventDefault()
    if(valueInput === "") return 

    dispatch({
      type:'add',
      payload:{
        valueInput:valueInput
      }
    })

    setValueInput("")
  }

  function saveButton(e){
    e.preventDefault()
    localStorage.setItem("listData",JSON.stringify(listArr))
  }

  function clearButton(e){
    e.preventDefault()
    localStorage.removeItem("listData")
    dispatch({ type:'delete all' })
    
  }

  return {
    valueInput,
    setValueInput,
    listArr,
    formClick,
    saveButton,
    clearButton,
    dispatch

  }
}

  export default useLocalSg