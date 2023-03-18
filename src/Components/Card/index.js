import React, {useState}from 'react'
import { useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from './Card'
import "./index.css"
export default function Index() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(responce=>setData(responce));
    },[])
console.log('data product',data)
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:1470,height:900,marginLeft:35,marginTop:30}}>
    <div class="parent" style={{width:370,height:880}}>
    <div class="child bg-ten"style={{borderRadius:10}}></div>
  </div>
        <Row>
            {data['products']?.slice(0,8).map((item,index)=>{
                return(
            <Col lg={3} xl={3} md={3}>
            <Card text={item.title} price={item.price} img={item?.images[3]}/>
            </Col>
                )
            })}
            
        </Row>
    </div>
  )
}
