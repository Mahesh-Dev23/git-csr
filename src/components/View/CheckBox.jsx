import React,{useContext} from 'react'

function CheckBox({data}) {
    return (
        <>
            {data.q.map(res => 
                <div className="radioInline" id={res.A} key={res.A}>
                    <div className="num">{res.A}</div>
                    <div className="dis">{res.d}</div>
                    <div className="selectPanel">{data.des4.map(des => 
                        <label for={res.A} >
                            <input type="text" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                        </label>)}
                    </div>
                </div>
            )}
            
        </>
    )
}

export default CheckBox
