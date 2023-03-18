import React from 'react'
import "./Cards.css"
import {Card} from"react-bootstrap"
export default function Cards({img,text}) {
  return (
    <div>
    <Card style={{width:125,alignItems:"center",height:150,border:"none"}}>
      <Card.Img className='liner' variant="top" src={img}style={{height:85,width:85,borderRadius:8}} />
      <Card.Body>
    <Card.Title><h6>{text}</h6></Card.Title>
      </Card.Body>
    </Card>
    </div>
  )
}
