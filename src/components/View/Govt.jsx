import React, {useState, useReducer, useContext, useEffect} from 'react'

import data from '../../data.json'
import { getResponce } from '../../App'

export default function Govt() {
    const captureQue6Values = useContext(getResponce)
    const [radio6, setRadio6] = useState()

    const reducer = (state, action)=>{
        switch(action.type){
            case 'govt':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [state6, dispatch] = useReducer(reducer, radio6)

    const radioClicked = (n, d) => {
        dispatch({type:'govt', value:d, name: n})
    }
    
    useEffect(()=>{
        if(state6){
            if( Object.keys(state6).length === data.que6.q.length){
                captureQue6Values.countDispatch({type:'que6', value:state6})
                captureQue6Values.countDispatch({type:'count', value:7})
                console.log(state6)

            }
            console.log(Object.keys(state6).length + " " + data.que6.q.length)
        }
        
    },[state6])

    return (
        <div className="section" id="govt" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data.que6.sec}</div>
                    <div className="panel-body">
                        
                        {data.que6.q.map(res => 
                            <div className="radioInline" id={res.A} key={res.A}>
                                <div className="num">{res.A}</div>
                                <div className="dis">{res.d}</div>
                                <div>
                                    <div className="num">{}</div>
                                    <div className="selectPanel2">{data.que6.des4.map(des => 
                                        <label for={res.A} >
                                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                                        </label>)}
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                    
            </div>
            
            
        </div>
    )
}
