import React,{useState, useReducer, useContext, useEffect} from 'react'

import Data from '../../data.json'
import {Link} from 'react-scroll'
import Radio5 from './Radio5'
import { getResponce } from '../../App'

export const Radio7Value = React.createContext()

function PreferToStay() {
    const captureQue7Values = useContext(getResponce)
    const [radio7, setRadio7] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'preferToStay':
                return {...state, [action.name]:action.value}
            case 'default':
                return state
        }
    }

    const [state7, dispatch ] = useReducer(reducer, radio7)
    //console.log(state7)

    // const nextPrev = () =>{
    //     captureQue7Values.countDispatch({type:'que7', value:state7})
    //     document.getElementById("main").class="slideUp"
    // }

    useEffect(()=>{
        if(state7){
            if( Object.keys(state7).length === Data.que7.q.length){
                captureQue7Values.countDispatch({type:'que7', value:state7})
                captureQue7Values.countDispatch({type:'count', value:8})
                console.log(state7)

            }
            console.log(Object.keys(state7).length + " " + Data.que7.q.length)
        }
        
    },[state7])

    return (
        <div className="section" id="prefer" >
            <div className="panel panel-default">
                    <div className="panel-heading">{Data.que7.sec}</div>
                    <div className="panel-body">
                        <div className="radioInline qTitles">
                                    <div className="num">{Data.que7.des1}</div>
                                    <div className="dis">{Data.que7.des2}</div>
                                    <div className="selectPanel">{Data.que7.des3}</div>
                                    
                        </div>
                        
                        <Radio7Value.Provider value={{countState: state7, countDispatch: dispatch}}><Radio5 data={Data.que7} id={"roi4"} /></Radio7Value.Provider>
                        {/* <button className="btn btn-primary" onClick={()=>nextPrev()}>Next</button> */}
                    </div>
                </div>
        </div>
    )
}

export default PreferToStay
