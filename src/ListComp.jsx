import { useContext } from "react"
import { ListContext } from "./App"
import ListDelete from './ListDelete'

 // homework 12.3
function ListComp(){

    const {listArr} = useContext(ListContext)

    return (
        <ol className='ol'>
            {
             listArr.map((list,index)=>{
              return(
                 
                 <li className="list" key={index }>
                    
                    {list}
                    <ListDelete deletId={index} list={list} />
                
                 </li>
                     
                )
              })
            }
        </ol>        
    )

}

export default ListComp