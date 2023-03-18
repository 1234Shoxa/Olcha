
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {BsFillPersonFill} from 'react-icons/bs'
import {HiUserGroup} from "react-icons/hi"
import Carusel from './Carusel';

export default function Home() {
  return (<>
  <div className='Parent' style={{margin:'0 105px'}}>
  <div className='Navbar'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <img width={'140px'} height={'48px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Logo_IT_Park_Uzbekistan.svg/2560px-Logo_IT_Park_Uzbekistan.svg.png" alt=""/>
        </NavbarBrand>
        <Link to="/auth/register">
        <div className='Login-box' style={{display:'flex',alignItems:'center',fontSize:'20px',width:'90px',justifyContent:'space-between',fontWeight:'600'}}>
          <BsFillPersonFill style={{background:'lime',color:'white',fontSize:'30px',borderRadius:'15px',padding:'4px 4px 0 4px'}}/>
          Kirish
        </div>
        </Link>
      </Navbar>
  </div>
  <Carusel/>
  <div className="row" style={{marginTop:50}}>
  <div className="col-lg-6 col-xl-4">
    <div className="card-stats mb-4 mb-xl-0 card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="text-uppercase text-muted mb-0 card-title">
              Qiz bolalar
            </h5>
            <span className="h2 font-weight-bold mb-0">211</span>
          </div>
          <div className="col-auto col">
            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fa fa-arrow-up" /> 3.48%
          </span>{" "}
          <span className="text-nowrap" />
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-6 col-xl-4">
    <div className="card-stats mb-4 mb-xl-0 card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="text-uppercase text-muted mb-0 card-title">
              O'g'il bolalar
            </h5>
            <span className="h2 font-weight-bold mb-0">43</span>
          </div>
          <div className="col-auto col">
            <div className="icon icon-shape bg-success text-white rounded-circle shadow">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fas fa-arrow-up" /> 3.48%
          </span>{" "}
          <span className="text-nowrap" />
        </p>
      </div>
    </div>
  </div>
  <div className="col-lg-6 col-xl-4">
    <div className="card-stats mb-4 mb-xl-0 card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="text-uppercase text-muted mb-0 card-title">Jami</h5>
            <span className="h2 font-weight-bold mb-0">254</span>
          </div>
          <div className="col-auto col">
            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fas fa-arrow-up" /> 100%
          </span>{" "}
          <span className="text-nowrap" />
        </p>
      </div>
    </div>
  </div>
</div>

  <div style={{ padding: 14 }}>
  <div className="p-3 card" style={{ display: "flex", alignItems: "center" }}>
    <div style={{ width: "80%" }}>
      <span>ID yoki Ism orqali sertifikatni qidirish</span>
      <div style={{ display: "flex", marginTop: 20 }}>
        <input
          placeholder="Qidirish"
          type="text"
          className="form-control"
          defaultValue=""
          style={{ width: "100%" }}
        />
        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginLeft: 10 }}
        >
          Qidirish
        </button>
      </div>
    </div>
  </div>
  <div className="p-3 card">
    <div className="row" />
  </div>
</div>










  </div>
    </>)
}
