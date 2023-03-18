import React from 'react'
import './Respheader.css'
import {BsTelephone} from "react-icons/bs"
export default function Respheader() {
    return ( 
        <div className='Respheader'>
<BsTelephone style={{marginTop:10}} className='bs'/>
<img className='Navbar-Olcha-text1' src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg"/>
<select>
    <option>Узб</option>
    <option>O'z</option>
    <option>Рус</option>
</select>
        </div>
    )
}