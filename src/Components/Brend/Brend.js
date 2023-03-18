import React from 'react'
import "./Brend.css"
import {RiArrowRightSLine} from "react-icons/ri"
import { useTranslation, Trans } from 'react-i18next';
export default function Brend() {
  const { t, i18n } = useTranslation();
  return (
<div className='brand'>
    <div style={{width:440}}>
      <div style={{display:"flex",justifyContent:'space-between',width:1500}}>
      <h1>Бренды</h1>
      <span style={{color:"red",}}>ПОСМОТРЕТЬ ВСЕ<RiArrowRightSLine style={{fontSize:22}}/></span>
      </div>
        <div className='tepa' style={{backgroundColor:'white',display:"flex",justifyContent:"space-between",marginTop:50}}>
        <img src="https://olcha.uz/uploads/images/manufacturer/KK/KK/Kh/1667632821.png" style={{height:50,width:85}}/>
        <span style={{color:"red",fontSize:18}}>Все товары<RiArrowRightSLine style={{fontSize:22}}/></span>
        </div>
        <div style={{backgroundColor:'white'}}>
          <div className='musik'>
        <div class="parent1" style={{width:120,height:120}}>
        <div class="child1 bg-one1"></div>
        </div>
        <br/>
        <span className='red' style={{}}>{t("description.part11")}</span>
          </div>
        <div class="parent1" style={{width:120,height:120}}>
        <div class="child1 bg-two1"></div>
        </div>
        <br/>
        <span className='red' style={{}}>{t("description.part12")}</span>
          </div>
    </div>
</div>
  )
}
