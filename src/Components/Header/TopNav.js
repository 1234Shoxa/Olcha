import React from 'react'
import './TopNav.css'
import { useTranslation, Trans } from 'react-i18next';
import ResHeader from './Respheader'
export default function TopNav() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <ResHeader/>
    <div className='top-nav'>
        <div className='button-boxs'>
            <button type="" className='button-box'>{t("description.part2")}</button>
            <button type="" className='button-box1'>{t("description.part3")}</button>
            <span>{t('description.part1')}</span>
        </div>
       <div className='TopNav-Left'>
       <div className='button-boxs2'>
            <h1>+998 (97) 929 83 38</h1>
            <button>{t("description.part4")}</button>
        </div>
        <div className='span-box'>
           <span onClick={()=>i18n.changeLanguage("uz")}>Ўзб</span>
           <span onClick={()=>i18n.changeLanguage("uzb")}>O'z</span>
           <span onClick={()=>i18n.changeLanguage("ru")}>Рус</span>
        </div>
       </div>
    </div>
    </>
  )
}
