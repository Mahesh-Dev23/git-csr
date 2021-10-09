import React,{useContext} from 'react'

import {Radio3AValue} from '../View/ROI'
import {Radio3BValue} from '../View/ROI'
import {Radio3CValue} from '../View/ROI'

function Scale5({data}) {

    const captureRadio3AValues = useContext(Radio3AValue)
    const captureRadio3BValues = useContext(Radio3BValue)
    const captureRadio3CValues = useContext(Radio3CValue)

    const sec = data.qSec

    const radioClicked = (n, d) => {
        if(sec.startsWith("A. I choose") ){
            captureRadio3AValues.countDispatch({type:'a', value:d, name: n})
        }else if(sec.startsWith("B. As an") ){
            captureRadio3BValues.countDispatch({type:'b', value:d, name: n})
        }else if(sec.startsWith("C. I relate") ){
            captureRadio3CValues.countDispatch({type:'c', value:d, name: n})
        }
        
    }

    return (
        <>
            {data.q.map(res => 
                <div className="radioInline scale" id={res.A} key={res.A}>
                    <div className="num">{res.A}</div>
                    <div className="dis-scale">{res.L}</div>
                    <div className="selectPanel">{data.des4.map(des => 
                        <label for={res.A} >
                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                        </label>)}
                    </div>
                    <div className="dis-scale" style={{marginLeft:"2%"}}>{res.R}</div>
                </div>
            )}
            
        </>
    )
}

export default Scale5