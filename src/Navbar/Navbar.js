import React, { useState } from 'react'
import { MenuList } from './MenuList';
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [child,setChild] = useState(false);
    const menuList = MenuList.map(({url,title},index) => {
        return(
            <li key={index}>
                <a href={url} activeclassname="active">{title}</a>
            </li>
        )
    });
  return (
    <nav>
        <div className='logo'>
            VPN <font>Lab</font>
        </div>
        <div className='menu-icon'>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        </div>
        <ul className='menu-list'>
            {menuList}
        </ul>
    </nav>
  )
}

export default Navbar
