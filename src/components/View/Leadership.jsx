import React, {useState, useReducer, useContext, useEffect} from 'react'

import Data from '../../data.json'

import Radio5 from './Radio5'

import { getResponce } from '../../App'

export const Radio5Value = React.createContext()
export const Radio5bValue = React.createContext()

export default function Leadership() {
    const captureQue5aValues = useContext(getResponce)
    const captureQue5bValues = useContext(getResponce)

    const [radio5Array, setRadio5Array] = useState([])
    const [radio5bArray, setRadio5bArray] = useState([])
    

    const reducer = (state, action)=>{
        switch(action.type){
            case 'q5a':
                return{...state, [action.name]:action.value}
            case 'q5b':
                return{...state, [action.name]:action.value}    
            default :
                return state       
        }      
    }
    const reducer2 = (state, action)=>{
        switch(action.type){
            
            case 'q5b':
                return{...state, [action.name]:action.value}    
            default :
                return state       
        }      
    }
    // user reducer 
    const [newState5, dispatch] = useReducer( reducer, radio5Array)
    const [newState5b, dispatch2] = useReducer( reducer2, radio5bArray)
    //console.log(newState5)
    //console.log(newState5b)

    // const nextPrev = () =>{
    //     captureQue5aValues.countDispatch({type:'que5a', value:newState5})
    //     captureQue5bValues.countDispatch({type:'que5b', value:newState5b})
    // }

    useEffect(()=>{
        if(newState5){
            if( Object.keys(newState5).length === Data.que5a.q.length){
                captureQue5aValues.countDispatch({type:'que5a', value:newState5})
                console.log(newState5)

                // checking newState5b
                if(newState5b){
                    if(Object.keys(newState5b).length === Data.que5b.q.length){
                        captureQue5bValues.countDispatch({type:'que5b', value:newState5b})
                        captureQue5bValues.countDispatch({type:'count', value:6})
                        console.log(newState5b)
                    }
                    console.log(Object.keys(newState5b).length + " " + Data.que5b.q.length)
                }
            }
            console.log(Object.keys(newState5).length + " " + Data.que5a.q.length)
        }
        
    },[newState5, newState5b])

    return (
        <div className="section" id="leadership" >
            <div className="panel panel-default">
                    <div className="panel-heading">{Data.que5a.sec}</div>
                    <div className="panel-body">
                        <div className="radioInline qTitles">
                                    <div className="num">{Data.que5a.des1}</div>
                                    <div className="dis">{Data.que5a.des2}</div>
                                    <div className="selectPanel">{Data.que5a.des3}</div>
                                    
                                </div>
                        
                        <Radio5Value.Provider value={{countState: newState5, countDispatch: dispatch}}><Radio5 data={Data.que5a} id={"leadership"} /></Radio5Value.Provider>
                        <h4>{Data.que5b.des5}</h4>
                        <Radio5bValue.Provider value={{countState2: newState5b, countDispatch2: dispatch2}}><Radio5 data={Data.que5b} id={"leadership2"} /></Radio5bValue.Provider>
                    </div>
                    {/* <button className="btn btn-primary" onClick={()=>nextPrev()}>Next</button> */}
            </div>
            
        </div>
    )
}
