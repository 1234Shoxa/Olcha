import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FiShoppingCart} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {IoMdStats} from "react-icons/io"
import { useTranslation, Trans } from 'react-i18next';
export default function Cards({img,text,price}) {
  const { t, i18n } = useTranslation();
  return (
    <div>
    <Card style={{backgraund:"white",width:230,height:410,border:"none",marginBottom:10}}>
      <div className='ai'><AiOutlineHeart/></div>
      <div className='ai'><IoMdStats/></div>
      <Card.Img className='im' src={img} style={{height:190,width:170,marginLeft:30,padding:10}}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
            {text.slice(0,20)}
        </Card.Text>
        <h4 style={{color:"black",fontWeight:600,fontSize:25}}>{price} $</h4>
        <div style={{background:"yellow",borderRadius:6,width:165,height:25}}>
        135  000 сум x 12 мес
        </div>
        <br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <button style={{backgraund:"white",border:"2px solid black",borderRadius:8,height:40,width:40,fontSize:20}}><FiShoppingCart/></button>
        <button style={{background:"white",border:"2px solid red",color:"red",borderRadius:8,height:40,width:150}}>{t("description.part10")}</button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
