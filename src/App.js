import React from 'react';
import useLocalSg from "./components/useLocalSg"
import ListComp from "./components/ListComponent"
import './App.css';

export const ListContext = React.createContext('');

function App() {
  
  // homework 12.1
  const {
    valueInput,
    setValueInput,
    listArr,
    dispatch,
    formClick,
    saveButton,
    clearButton

  } = useLocalSg()


  return (
    <div className='App'  >
      <h1 className='title'>Todos</h1>
      <div className="flex" >

        {/*  homework 12.1 */}
        <form className='form' onSubmit={(e) => formClick(e)}>

          <input value={valueInput} className="input" onChange={(e)=>setValueInput(e.target.value)} type="text" />
          <button className='buttonAdd'>Add</button>
          <button className='buttonSave' onClick={(e)=>saveButton(e)}>Save</button>
          <button className='buttonClear' onClick={(e)=>clearButton(e)}>RmvSave</button>
            
        </form>

        {/*  homework 12.2-4 */}
        <ListContext.Provider value={{listArr,dispatch} }>
          <ListComp />
        </ListContext.Provider>

      
      </div>
    </div>
  );
}

export default App;
