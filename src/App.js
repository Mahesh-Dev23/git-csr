import React,{useState, useReducer, useEffect, useContext} from 'react'

import './App.css';
import './main.scss'
import {Link} from 'react-scroll'
import img from '../src/thanks.png'


import Main from './components/View/Main';
import Top from './components/View/Top'
import Nevigation from './components/View/Nevigation';

import post from './components/Controller/post';

export const getResponce = React.createContext()

function App() {
  const responce = {
    "demo" : {"salutation": "Mr."},
    "que1" : {},
    "que2" : {},
    "que3a":{},
    "que3b" : {},
    "que3c" : {},
    "que3d":{},
    "que4a" : {},
    "que4b" : {},
    "que4c":{},
    "que5a" : {},
    "que5b" : {},
    "que6":{},
    "que7":{},
    "file":{},
    "count":0
  }
  const [top, setTop] = useState(0)
  const [allRes = responce, setAllRes] = useState()

  const reducer = (state= responce , action) =>{
    switch(action.type){
      case 'demo':
        return {...state, "demo":action.value}
      case 'que1':
        return {...state, "que1":action.value}
      case 'que2':
        return {...state, "que2":action.value}
      case 'que3a':
        return {...state, "que3a":action.value}
      case 'que3b':
        return {...state, "que3b":action.value}
      case 'que3c':
        return {...state, "que3c":action.value}
      case 'que3d':
        return {...state, "que3d":action.value}
      case 'que4a':
        return {...state, "que4a":action.value}
      case 'que4b':
        return {...state, "que4b":action.value}
      case 'que4c':
        return {...state, "que4c":action.value}
      case 'que5a':
        return {...state, "que5a":action.value}
      case 'que5b':
        return {...state, "que5b":action.value}    
      case 'que6':
        return {...state, "que6":action.value}
      case 'que7':
        return {...state, "que7":action.value}
      case 'count':
        return {...state, "count":action.value } 
      case 'file':
        return {...state, "file":action.value }             
      case 'default' :
        return state    
    }
  }

  const [newState, dispatch] = useReducer(reducer, allRes)

  const submitResponce = () =>{
    post(newState)
  }

  const startSurvey =(a) =>{
    setTop(a)
  }

  useEffect(()=>{
    
  },[newState])
  
  console.log(newState)
  console.log(newState.count)
  return (
    <div className="App">
      
      <getResponce.Provider value={{countState: newState, countDispatch: dispatch}}>
        <Main newState = {newState}/>
        <Nevigation  currentLink={top} newState = {newState}/>
      </getResponce.Provider>
      
      <div className="section" id="thanks">
        <div className="profilepic"><img src={img}  width="100%" height="100%"/></div>
        <h3>Thank you for participating in this survey.</h3>
        <p>Please click "Submit" button to submit the survey!</p>
        <button className="btn btn-primary" onClick={()=>submitResponce()}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;
