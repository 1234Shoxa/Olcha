import React from 'react'
import './Carusel3.css'
import { useTranslation, Trans } from 'react-i18next';
export default function Carusel3() {
  const { t, i18n } = useTranslation();
  return (<>
  <div  style={{display:"flex",justifyContent:"space-between",width:1470,height:200,marginLeft:35,marginTop:30}}>
  <div class="parent" style={{width:470}}>
    <div class="child bg-one"style={{borderRadius:10}}></div>
  </div>
  <div class="parent"style={{width:470}}>
    <div class="child bg-two"style={{borderRadius:10}}></div>
  </div>
  <div class="parent"style={{width:470}}>
    <div class="child bg-three"style={{borderRadius:10}}></div>
  </div>
  </div>
  {/* Center */}
  <div class="parent" style={{width:1470,height:300,marginLeft:35}}>
    <div class="child bg-four"style={{borderRadius:10}}></div>
  </div>
{/* Down */}
  <div  style={{display:"flex",justifyContent:"space-between",width:1470,height:200,marginLeft:35,marginTop:30}}>
  <div class="parent" style={{width:470}}>
    <div class="child bg-five"style={{borderRadius:10}}></div>
    </div>
  <div class="parent"style={{width:470}}>
    <div class="child bg-six"style={{borderRadius:10}}></div>
  </div>
  <div class="parent"style={{width:470}}>
    <div class="child bg-seven"style={{borderRadius:10}}></div>
  </div>
  </div>
  {/*  */}
  <div  style={{display:"flex",justifyContent:"space-around",marginLeft:25,marginTop:30}}>
  <div class="parent"style={{width:720,height:250}}>
    <div class="child bg-eight"style={{borderRadius:10}}></div>
  </div>
  <div class="parent"style={{width:720,height:250}}>
    <div class="child bg-nine"style={{borderRadius:10}}></div>
  </div>
  </div>
</>
  )
}
