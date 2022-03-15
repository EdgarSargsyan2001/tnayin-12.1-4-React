import React from 'react';
import useLocalSg from "./useLocalSg"
import ListComp from "./ListComp"
import './App.css';

export const ListContext = React.createContext('');

function App() {
  
  // homework 12.1
  const {
    valueInput,
    setValueInput,
    listArr,
    setListArr,
    formClick,
    saveButton,
    clearButton

  } = useLocalSg()
//========================

  return (
    <div className='flex'>
    <div className="App">

      {/*  homework 12.1 */}
      <form className='form' onSubmit={(e) => formClick(e)}>

        <input value={valueInput} onChange={(e)=>setValueInput(e.target.value)} type="text" />
        <button className='buttonAdd'>Add</button>
        <button className='buttonSave' onClick={(e)=>saveButton(e)}>Save</button>
        <button className='buttonClear' onClick={(e)=>clearButton(e)}>Clear All</button>
          
      </form>

      {/*  homework 12.3 */}
      <ListContext.Provider value={{listArr,setListArr}}>
        <ListComp />
      </ListContext.Provider>

    
    </div>
    </div>
  );
}

export default App;
