
import { useContext } from "react"
import { ListContext } from "./App"

 // homework 12.3
function ListDelete({deletId,list}){

    const {listArr,setListArr} = useContext(ListContext)

    function deletList(){
        setListArr(listArr.filter((el,index)=>{

            return (index === deletId && el === list)?false:true

        }))
    }
    
    
    return <button className="delbutton" onClick={deletList}>X</button>

}


export default ListDelete