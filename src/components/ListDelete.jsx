
import { useContext } from "react"
import { ListContext } from "../App"

 // homework 12.3
export default (function ListDelete({deletId}){
    const {dispatch} = useContext(ListContext)  // homework 12.3

    function deletList(){
        dispatch({
            type:"delete",
            payload:{
                deletId:deletId,
            }
        })
    }
    
    return <button className="delbutton" onClick={deletList}>X</button>

})


