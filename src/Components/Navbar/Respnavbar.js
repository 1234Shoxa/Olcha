import React from 'react'
import './Respnavbar.css'
import {BsSearch} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
export default function Respnavbar() {
  return (
<div className='glava'>
<button className='Navbar-Katalog1'><AiOutlineMenu style={{fontSize:20,marginRight:15}}/> </button>
<input className='Navbar-inp2' placeholder='Поиск по каталогу'/>
</div>
  )
}
