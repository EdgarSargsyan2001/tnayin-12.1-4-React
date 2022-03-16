import { useContext } from "react"
import { ListContext } from "../App"
import ListDelete from './ListDelete'
import useFetchData from '../components/useFetchData'


 // homework 12.3
function ListComponent(){

    const {respVal} = useFetchData()   // homework 12.2
    const {listArr} = useContext(ListContext) //homework 12.3

    return (
        <ol className='ol' style={{backgroundImage:`url(${respVal})`}}>
            {
             listArr.map((list,index)=>{
              return(
                 
                 <li className="list" key={index }>
                    
                    {list}
                    <ListDelete deletId={index} />
                
                 </li>
                     
                )
              })
            }
        </ol>        
    )

}

export default ListComponent