import React, {useState, useEffect, useContext} from 'react'

import {Link} from 'react-scroll'
import data from '../../data.json'
import { getResponce } from '../../App'

import Top from './Top'

function Nevigation({newState}) {
    const captureQue = useContext(getResponce)
    const navg = ["welcome", "demographic", "loyalty", "roi", "motivational", "leadership", "govt", "prefer", "thanks"]
    //let currentIndex =  navg.indexOf(currentLink)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [goTo, setGoTo] = useState(1)
    const [goBackTo, setGoBackTo] = useState(-1)
    
    // useEffect(()=>{
    //     setCurrentIndex(navg.indexOf(currentLink))
    //     setGoBackTo(0)
    // },[currentLink])
    
    
    const goToPage = () => {
        if(newState.que1){
               // console.log(newState.que1.length)
        }

        if(goTo !== navg.length){
            //setGoTo( goTo + 1 )
            setGoBackTo( newState.count - 1 )
            //setCurrentIndex(goTo ) 
            //captureQue.countDispatch({type:'count', value:goTo})
        }
    }

    const goBackToPage = () => {
        
        if(goBackTo !== -1){
            setGoBackTo( goBackTo - 1 )  
            setGoTo( goTo - 1 ) 
            //setCurrentIndex(goTo - 2)
        } 
        
        if(goTo === navg.length){
            setGoTo( goTo - 1 )
        }

        
    }

    

    //useEffect(()=>{ setCurrentIndex( goTo - 1 ) },[goTo])
    let newId = navg[currentIndex]
    let que = "newState.que" + currentIndex
    let thisQue = Object.keys(que).length + 1
    let dataQue = "data.que" + currentIndex + ".q"
    let countID = newState.count
    //console.log(newState.que1.length)
    //useEffect(()=>{ setGoBackTo( goTo - 2 ) },[goTo])
    //console.log("data " + data.que1.q.length)
    //console.log("newState " + Object.keys(que).length)
    console.log("goBackTo " + goBackTo)
    useEffect(()=>{ que = "newState.que" + goTo },[goTo])
    //console.log(newId)
    console.log(goTo)
    
    if(newState.que1){
        if( thisQue  === dataQue.length + 2){
            console.log(Object.keys(newState.que1).length )
        }
        console.log(Object.keys(newState.que1).length )
    }
 
    //console.log(Object.keys(newState.que1).length )
    console.log("newState count " + newState.count )

    return (
        <>
            { newState.count !== 0 ? <Top /> : '' }
            <div className="navigator">
                { goBackTo >= 0 ? <button className="btn btn-primary previous" >
                    <Link className="li" id="previous" to={ navg[goBackTo] } spy={true} smooth={true}  delay={500} onClick = {()=> goBackToPage()}>Previous</Link>
                </button> : '' }
                { newState.count !== navg.length  ? <button className="btn btn-primary next"  >
                    <Link className="li" id="next" to={ navg[newState.count] } spy={true} smooth={true}  delay={500}  onClick = {()=>goToPage()} >{newState.count === 0 ? "Start" : "Next"}</Link>
                </button> : '' }
                { newState.count !== navg.length - 1 ?<h5>To move ahead, please select all the fields in the section.</h5> : '' }
            </div>
        </>
    )
}

export default Nevigation