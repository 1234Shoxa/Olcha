import React from 'react'
import './Navbar.css'
import { useTranslation, Trans } from 'react-i18next';
import RespNavbar from './Respnavbar'
import {AiOutlineMenu} from "react-icons/ai"
import {IoMdStats} from "react-icons/io"
import {BsSearch} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {RxPerson} from "react-icons/rx"
import {CgShoppingCart} from "react-icons/cg"
export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (<>
  <RespNavbar/>
    <div className='glavni'>
        <div className='Navbar1'>
            <img className='Navbar-Olcha-text' src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg"/>
            <button className='Navbar-Katalog'><AiOutlineMenu style={{fontSize:25 ,marginRight:15}}/>Каталог </button>
            <div>
              <form>
                <input className='Navbar-inp1' placeholder={t("description.part5")}/>
                <button className='Navbar-Search'><BsSearch className='se'/></button>
                </form>
            </div>
            <div className='Navbar-iconlar'>
              <div className='Navbar'>
              <IoMdStats style={{marginLeft:30,fontSize:25}}/>
              <br />
              <p>{t("description.part6")}</p>
              </div>
              <div className='Navbar'>
              <AiOutlineHeart style={{marginLeft:30,fontSize:25}}/>
              <br />
              <p>{t("description.part7")}</p>
              </div>
              <div className='Navbar'>
              <CgShoppingCart style={{marginLeft:20,fontSize:25}}/>
              <br />
              <p>{t("description.part8")}</p>
              </div>
              <div className='Navbar'>
              <RxPerson style={{marginLeft:30,fontSize:25}}/>
              <br />
              <p style={{marginLeft:"20px"}}>{t("description.part9")}</p>
              </div>
            </div>
        </div>
        </div>
        </>
  )
}
