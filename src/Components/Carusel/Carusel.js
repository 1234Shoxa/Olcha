import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment'
export default function Carusel() {
  return (
    <div>
        <Row>
          <Col lg={9} xl={9} md={9} style={{height:340}}>
            <Carousel style={{marginTop:10,marginLeft:15}}>
          <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/53HpueTZ3WnflCrewaf4Us3FKpFUHyp1fu3DnOADuKQZN8z2HWCEekuzfbCo.png"
          alt="First slide"
          style={{borderRadius:10}}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/wDTj1CDDbiQQgr1SlBmn2jyOMwueb10s5TLF36MLcSZW6hHDuFVnAJtqfiHK.png"
          alt="Second slide"
          style={{borderRadius:10}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/uz/BeHCBlcARuIsJcpBchP4r8mXALqihU3dt3gMCG2LMPIdTHHTWPztEHI4HT8N."
          alt="Third slide"
          style={{borderRadius:10}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://olcha.uz/image/original/sliders/ru/PkQ0qUIvcBWqpPhvMu8tlQw4kdT8DCbC5sGm7xQ2Zs9hF0UZ0vwbpeuARVwk."
          alt="Fourst slide"
          style={{borderRadius:10}}
        />
      </Carousel.Item>
    </Carousel>
          </Col>
          <Col xl={3} lg={3} md={3} style={{ width:"310px",height:390,marginTop:10,border:"4px solid red",borderRadius:10}}>
          <Carousel >
      <Carousel.Item>
      <Card style={{ border:"none"}}>
      {/* <div style={{height:20}}>{moment().format("MMM Do YY")}
      </div> */}
      <Card.Img variant="top" src="https://olcha.uz/image/220x220/products/2020-02-17/artel-ua43h3401-android-tv-12123-0.jpeg" style={{height:200,width:220,marginLeft:30,marginTop:35}}/>
      <Card.Body>
      <Card.Text>
      Телевизор Artel UA43H3401 Android TV 
      <div style={{color:"red",fontWeight:600,fontSize:22}}>
      3  330  000 сум
      </div>
      <div style={{background:"yellow",borderRadius:6,width:165}}>
      360  000 сум x 12 мес
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ border:"none"}}>
      <Card.Img variant="top" src="https://olcha.uz/image/220x220/products/2022-09-17/vodonepronitsaemaya-sumka-dlya-smartfona-bolice-119634-0.jpeg" style={{height:170,width:180,marginLeft:45,marginTop:40}}/>
      <Card.Body>
        <Card.Text>
        Водонепроницаемая сумка для смартфона Bolice
        <div  style={{color:"black",fontWeight:600,fontSize:22}}>
          80  000 сум
        </div>
        <div style={{background:"yellow",borderRadius:6,width:165}}>
        11  000 сум x 12 мес
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ border:"none"}}>
      <Card.Img variant="top" src="https://olcha.uz/image/220x220/products/2022-12-04/stolovyy-nabor-simp-field-flower-46-predmetov-173156-0.jpeg" style={{height:180,width:200,marginLeft:40,marginTop:40}}/>
      <Card.Body>
        <Card.Text>
        Столовый набор Simp Field Flower 46 предметов
        <div style={{color:"black",fontWeight:600,fontSize:22}}>
        955  000 сум
        </div>
        <div style={{background:"yellow",borderRadius:6,width:165}}>
        129  000 сум x 12 мес
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>
    </div>
  )
}