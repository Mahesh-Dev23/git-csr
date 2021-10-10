import React, {useState, useReducer, useContext, useEffect} from 'react'

import data3 from '../../data.json'

import Radio5 from './Radio5'
import Scale5 from './scale5'
import { getResponce } from '../../App'

export const Radio3AValue = React.createContext()
export const Radio3BValue = React.createContext()
export const Radio3CValue = React.createContext()
export const Radio3DValue = React.createContext()

function ROI({newState}) {
    const captureQue3aValues = useContext(getResponce)
    const captureQue3bValues = useContext(getResponce)
    const captureQue3cValues = useContext(getResponce)
    const captureQue3dValues = useContext(getResponce)

    const [radio3A, setradio3A] = useState([])
    const [radio3B, setradio3B] = useState([])
    const [radio3C, setradio3C] = useState([])
    const [radio3D, setradio3D] = useState([])

    const [radio3, setRadio3] = useState([])

    

    
    const reducer = (state, action)=>{
        switch(action.type){
            case 'a':
                return {...state, [action.name]:action.value}
            case 'b':
                return {...state, [action.name]:action.value}  
            case 'c':
                return {...state, [action.name]:action.value}
            case 'roi':
                return {...state, [action.name]:action.value}      
            case 'default':
                return state
        }
    }

    const [state3A, dispatchA ] = useReducer(reducer, radio3A)
    const [state3B, dispatchB ] = useReducer(reducer, radio3B)
    const [state3C, dispatchC ] = useReducer(reducer, radio3C)
    const [state3D, dispatch ] = useReducer(reducer, radio3D)
    

    useEffect(()=>{
        if(state3A){
            if(Object.keys(state3A).length === data3.que3a.q.length ){
                captureQue3aValues.countDispatch({type:'que3a', value:state3A})
                
                console.log(state3A )
                // state3B checking -----------------------------------
                if(state3B){
                    if(Object.keys(state3B).length === data3.que3b.q.length ){
                        captureQue3bValues.countDispatch({type:'que3b', value:state3B})
                        console.log(state3B ) 

                        // state3C checking -----------------------------------
                        if(state3C){
                            if(Object.keys(state3C).length === data3.que3c.q.length ){
                                captureQue3cValues.countDispatch({type:'que3c', value:state3C})
                                console.log(state3C ) 
                                
                                // state3D checking -----------------------------------
                                if(state3D){
                                    if(Object.keys(state3D).length === data3.que3d.q.length ){
                                        captureQue3cValues.countDispatch({type:'que3c', value:state3C})
                                        console.log(state3D ) 
                                        captureQue3aValues.countDispatch({type:'count', value:4})
                                        
                
                                        
                                    }
                                    console.log(Object.keys(state3D).length + " " + data3.que3d.q.length)
                                }
                                
        
                                
                            }
                            console.log(Object.keys(state3C).length + " " + data3.que3d.q.length)
                        }
                        


                    }
                    console.log(Object.keys(state3B).length + " " + data3.que3b.q.length)
                }
            }
            console.log(Object.keys(state3A).length + " " + data3.que3a.q.length)
        }
    },[state3A, state3B, state3C, state3D])

       
    return (
        <div className="section" id="roi" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data3.que3d.sec}</div>
                    <div className="panel-body">

                        <h4>{data3.que3a.qSec}</h4>
                        <Radio3AValue.Provider value={{countState: state3A, countDispatch: dispatchA}}><Scale5 data={data3.que3a}  /></Radio3AValue.Provider>

                        <h4>{data3.que3b.qSec}</h4>
                        <Radio3BValue.Provider value={{countState: state3B, countDispatch: dispatchB}}><Scale5 data={data3.que3b}  /></Radio3BValue.Provider>

                        <h4>{data3.que3c.qSec}</h4>
                        <Radio3CValue.Provider value={{countState: state3C, countDispatch: dispatchC}}><Scale5 data={data3.que3c} id={"roi4"} /></Radio3CValue.Provider>

                        <h4>{data3.que3d.qSec}</h4>
                        <div className="radioInline qTitles">
                            <div className="num">{data3.que3d.des1}</div>
                            <div className="dis">{data3.que3d.des2}</div>
                            <div className="selectPanel">{data3.que3d.des3}</div>   
                        </div>
                        <Radio3DValue.Provider value={{countState: state3D, countDispatch: dispatch}}><Radio5 data={data3.que3d} id={"roi4"} /></Radio3DValue.Provider>
                        
                    </div>
            </div>
        </div>
    )
}

export default ROI
