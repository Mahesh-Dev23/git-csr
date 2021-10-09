import React from 'react'

import Data from '../../data.json'

import Welcom from './Welcom'
import Demographic from './Demographic'
import Loyalty from './Loyalty'
import Radio5 from './Radio5'
import ROI from './ROI'
import PreferToStay from './PreferToStay'
import Leadership from './Leadership'
import Govt from './Govt'
import Motivational from './Motivational'
import Menu from './Menu'



function Main({newState}) {
    return (
        <div id="main">
            
            <div className="container-fluid">
                        <Welcom />
                        <Demographic />
                        <Loyalty data={Data.que2} id={"loyalty"} />
                        <ROI newState = {newState}/>
                        <Motivational />
                        <Leadership />
                        <Govt />
                        <PreferToStay />
                        
                    
            
            
            </div>
            

        </div>
    )
}

export default Main
