import React,{useState, useReducer, useEffect, useContext} from 'react'
import axios from 'axios'

import { getResponce } from '../../App'
import data from '../../data.json'

function Demographic({newState}) {
    const captureQue1Values = useContext(getResponce)
    const [user, setUser] = useState()
    const [rel, setRel] = useState()
    const [courses, setCourses] = useState()
    const [city, setCity] = useState()
    const [city2, setCity2] = useState()
    const [city3, setCity3] = useState()
    const [service, setService] = useState()
    const [ind, setInd] = useState()
    const [value, setValue] = useState()

    let userLength 
    const reducer = (state, action)=>{
        switch(action.type){
            case 'demo':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [userNew, dispatch] = useReducer(reducer, user)

    
        
  

    const radioClicked = (n, d) => {
        
        dispatch({type:'demo', value:d, name: n})
        if(userNew && userNew.education && userNew.education === "Professional Course"){ dispatch({type:'demo', name:"education", value:courses}) }

        if(userNew && userNew.residence && userNew.residence === "Metro"){ dispatch({type:'demo', name:"residence", value:city}) }
        if(userNew && userNew.residence && userNew.residence === "II"){ dispatch({type:'demo', name:"residence", value:city2}) }
        if(userNew && userNew.residence && userNew.residence === "III"){ dispatch({type:'demo', name:"residence", value:city3}) }

        if(userNew && userNew.occupation && userNew.occupation === "If Service, please specify"){ dispatch({type:'demo', name:"occupation", value:service}) }

        if(userNew && userNew.industry && userNew.industry === "Other industry"){ dispatch({type:'demo', name:"industry", value:ind}) }

        if(userNew && userNew.religion && userNew.religion === "Others"){ dispatch({type:'demo', name:"religion", value:rel}) }
    }

    useEffect(()=>{
         dispatch({type:'demo', name:"religion", value:rel}) 
    },[rel])

    useEffect(()=>{
        dispatch({type:'demo', name:"residence", value:city}) 
    },[city])

    useEffect(()=>{
       dispatch({type:'demo', name:"residence", value:city2}) 
    },[city2])

    useEffect(()=>{
         dispatch({type:'demo', name:"residence", value:city3}) 
    },[city3])

    useEffect(()=>{
         dispatch({type:'demo', name:"industry", value:ind}) 
    },[ind])

    useEffect(()=>{
         dispatch({type:'demo', name:"occupation", value:service}) 
    },[service])

    useEffect(()=>{
         dispatch({type:'demo', name:"education", value:courses}) 
    },[courses])

    useEffect(()=>{
        if(userNew){
            

            if(userNew.religion && userNew.religion === "Others"){ dispatch({type:'demo', name:"religion", value:rel}) }
            if(Object.keys(userNew).length === data.que1.q.length){
                captureQue1Values.countDispatch({type:'que1', value:userNew})
                captureQue1Values.countDispatch({type:'count', value:2})
            }
        }
    },[userNew])

    
    
    console.log(userNew)
    return (
        <div className="section" id="demographic" >
            
                <div className="panel panel-default">
                    <div className="panel-heading">{data.que1.sec}</div>
                    <div className="panel-body">
                        <form  id="demo">
                            
                            {data.que1.q.map( res =>
                                <div className="form-group ">
                                    <label >{res.label}</label>
                                        <div className="radioInline">
                                            {res.des.map(desc => 
                                            <label for={desc} >
                                                <input type="radio" id={res.label} name={res.name} value={desc} onClick={ ()=> radioClicked(`${res.name}`,`${desc}`)} />{desc}
                                            </label>)}
                                            {res.name === "religion" ? <label for={res.name} ><input type="text" id={res.label} name={res.name}  onChange={ e => setRel(e.target.value)} placeholder="please specify" /></label> :
                                            res.name === "education" ? <label for={res.name} ><input type="text" id={res.label} name={res.name}  onChange={ e => setCourses(e.target.value)} placeholder="CA/ CS/ CMA etc."/></label> :
                                            res.name === "industry" ? <label for={res.name} ><input type="text" id={res.label} name={res.name}  onChange={ e => setInd(e.target.value)} placeholder="please specify"/></label> :
                                            res.name === "occupation" ? <label for={res.name} ><select type="text" id={res.label} name={res.name}  onChange={ e => setService(e.target.value)} >
                                                <option name={res.name} value="State Government" >State Government</option>
                                                <option name={res.name} value="Central Government" >Central Government</option>
                                                <option name={res.name} value="Government Local bodies" >Government Local bodies</option>
                                                <option name={res.name} value="Private Sector" >Private Sector</option>
                                                </select></label> :
                                            res.name === "residence" ? 
                                                <><label for={res.name} ><input type="radio"  name={res.name} value={"Metro"} onClick={ ()=> radioClicked(`${res.name}`, city ? city :"Metro")} />Metro City <input type="text"  onChange={ e => setCity(e.target.value)} placeholder="Mumbai/ Delhi/ Bangalore/ Kolkata/ Chennai"/></label>
                                                <label for={res.name} ><input type="radio"  name={res.name} value={"II"} onClick={ ()=> radioClicked(`${res.name}`, city2 ? city2 :"II")}/>II tier City <input type="text"   onChange={ e => setCity2(e.target.value)} placeholder="Pune /Cochin/ Jaipur/Lucknow etc."/></label>
                                                <label for={res.name} ><input type="radio"  name={res.name} value={"III"} onClick={ ()=> radioClicked(`${res.name}`, city3 ? city3 : "III")}/>III tier City <input type="text"   onChange={ e => setCity3(e.target.value)} placeholder="Coimbatore / Nashik etc."/></label></> :    
                                            '' }
                                        </div>   
                                </div>
                            )}
                            
                            
                            
                        </form>
                        
                    </div>
                </div>
            
            
        </div>
    )
}

export default Demographic
