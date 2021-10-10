import React,{useState, useReducer, useEffect, useContext} from 'react'

import { getResponce } from '../../App'
import data from '../../data.json'
import img from '../../manoj.png'
import post from '../Controller/post'

function Welcom() {
    const captureDemoValues = useContext(getResponce)

    const [user, setUser] = useState()

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
        if(userNew){
            
            if(Object.keys(userNew) != "sal"){
            dispatch({type:'demo', value:"Mr", name: "sal"})
            }
           
        }
        
    }
    useEffect(()=>{
        if(userNew){
            if(Object.keys(userNew).length === 3){
                captureDemoValues.countDispatch({type:'demo', value:userNew})
                captureDemoValues.countDispatch({type:'count', value:1})
                post(userNew)
            }
            console.log(Object.keys(userNew).length )
            
        }
    },[userNew])
    
    console.log( userNew )
    return (
        <div  id="welcome">
            <div className="profilepic"><img src={img}  width="100%" height="100%"/></div>
                <div id="intro">
                    <p>Hi friends, I am Manoj Pansare. Welcome to my Corporate Social Responsibility - survey page. Purpose of this survey is purely academic. This survey is part of my research paper on Corporate Social Responsibility, which is my subject for Phd degree. </p>
                    <p>Corporate Social Responsibility, the name itself suggests the content. In today's scenario from carbon emmision, global warming to fulfilling promises of consumer at very end level are considered ad reponsibilities of Corporate. The survey is also about finding awareness of Corporate Social Responsibilities among us as society, governing bodies and corporates.</p>
                    <h5>For this survey feedback I will be collecting only the data that you are submitting as answers. I have not set any cookies or any other backend process to collect any data besides your answers. Also your feedback is confidencial and stays with me, as support to my research work. Thank you for putting your valueble time. </h5> 
                    <h5>Please start by submitting name and 10 digit mobile number and clicking the start button thereafter. While you are participating, you can nevigate back to the feedback that you have already completed and can change it, if you feel so. Final data is submitted at the end. After final submition no one can visit your feedback except me. </h5>
                </div>
            <form  id="demo" class="form-inline">
                <div className="form-group">
                
                <select id="sal" className="form-control" name="sal" onChange={e=>radioClicked( e.target.name, e.target.value)}>
                    <option value="Mr" selected>Mr</option>
                    {data.que0.salutation.Salutation.map(res => <option value={res}>{res}</option>)}
                
                </select>
                    
                </div>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="name" onChange={e=>radioClicked( data.que0.name.name, e.target.value)} placeholder={data.que0.name.label} size="25"></input>
                </div>            
                <div className="form-group">
                    
                    <input type="text" className="form-control"  id="mobile" onChange={e=>radioClicked( data.que0.mobile.name, e.target.value)} placeholder={data.que0.mobile.label} min="10" max="10" maxLength="10" size="12"></input>
                </div>
            </form>                
        </div>
    )
}

export default Welcom
