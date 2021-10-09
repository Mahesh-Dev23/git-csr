import React,{Component} from 'react'
import {Link} from 'react-scroll'

function Menu() {
    return (
        <ul className="menubar" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link className="li" to="welcome" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="demographic" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="loyalty" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="roi" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="motivational" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="leadership" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="govt" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="prefer" spy={true} smooth={true}></Link></li>
          <li><Link className="li" to="thanks" spy={true} smooth={true}></Link></li>
        </ul>
    )
}

export default Menu
