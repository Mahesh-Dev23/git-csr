import React,{useState, useEffect, useReducer, useContext} from 'react'


import {Radio2Value} from '../View/Loyalty'
import {Radio3DValue} from '../View/ROI'
import {Radio4AValue} from '../View/Motivational'
import { Radio5Value } from './Leadership'
import { Radio5bValue } from './Leadership'
import {Radio7Value} from '../View/PreferToStay'

function Radio5({data}) {
    const captureRadioValues = useContext(Radio2Value)
    const captureRadio3DValues = useContext(Radio3DValue)
    const captureRadio4AValues = useContext(Radio4AValue)
    const captureRadio5Values = useContext(Radio5Value)
    const captureRadio5bValues = useContext(Radio5bValue)
    const captureRadio7Values = useContext(Radio7Value)
    const sec = data.sec
    //console.log(sec)
    const [pos, setPos] = useState(0)
    const moveTop = ()=>{ 
        const element2 = document.getElementById("demo")
        setPos( pos - 50)
        element2.style.marginTop = pos + "px"
        element2.style.color = "red"
    }

    const radioClicked = (n, d) => {
        if(sec.startsWith("Q.2") ){
            captureRadioValues.countDispatch({type:'main', value:d, name: n})
        }else if(sec.startsWith("Q.3")){
            captureRadio3DValues.countDispatch({type:'roi', value:d, name: n})
        }else if(sec.startsWith("Q.4")){
            captureRadio4AValues.countDispatch({type:'a', value:d, name: n})
        }else if(sec.startsWith("Q.5")){
            captureRadio5Values.countDispatch({type:'q5a', value:d, name: n})
        }else if(sec.startsWith("Q.b5")){
            captureRadio5bValues.countDispatch2({type:'q5b', value:d, name: n})
        }else if(sec.startsWith("Q.7")){
            captureRadio7Values.countDispatch({type:'preferToStay', value:d, name: n})
        }
        //moveTop()
    }
    
    return (
        <>
            {data.q.map(res => 
                <div className="radioInline" id={res.A} key={res.A}>
                    <div className="num">{res.A}</div>
                    <div className="dis">{res.d}</div>
                    <div className="selectPanel" id="demo">{data.des4.map(des => 
                        <label for={res.A} >
                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                        </label>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default Radio5
