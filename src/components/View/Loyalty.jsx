import React,{useState, useEffect, useReducer, useContext} from 'react'

import { getResponce } from '../../App'

import Radio5 from './Radio5'
import data2 from '../../data.json'

export const Radio2Value = React.createContext()

function Loyalty({data}) {
    const captureQue2Values = useContext(getResponce)
    const [radioArray, setRadioArray] = useState([])
    

    const reducer = (state, action)=>{
        switch(action.type){
            case 'main':
                return{...state, [action.name]:action.value}
            default :
                return state       
        }      
    }

    // user reducer 
    const [newState2, dispatch] = useReducer( reducer, radioArray)

    const radioClicked = (n, d) => {
        captureQue2Values.countDispatch({type:'que2', value:newState2})
    }
   
    const [pos, setPos] = useState(0)

    const moveTop = ()=>{ 
        const element2 = document.getElementById("loyaltyForm")
        setPos( pos - 50)
        element2.style.marginTop = pos + "px"
        element2.style.objectPosition = "-50px 0"
    }
    useEffect(()=>{
        if(newState2){
            if(Object.keys(newState2).length === data2.que2.q.length){
                captureQue2Values.countDispatch({type:'que2', value:newState2})
                captureQue2Values.countDispatch({type:'count', value:3})
            }
            console.log(Object.keys(newState2).length )

        }
    },[newState2])

   
    return (
        <div className="section" id="loyalty" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data.sec}</div>
                    <div className="panel-body">
                        <div className="radioInline qTitles">
                            <div className="num">{data.des1}</div>
                            <div className="dis">{data.des2}</div>
                            <div className="selectPanel">{data.des3}</div>          
                        </div>
                        <div id="loyaltyForm">
                        <form  >
                            <Radio2Value.Provider value={{countState: newState2, countDispatch: dispatch}}>< Radio5 data={data} /></Radio2Value.Provider>                             
                        </form>    
                           
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Loyalty
