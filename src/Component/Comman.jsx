import React from 'react'
import { NavLink } from "react-router-dom";

export default function Comman(props) {
  return (
    <div>
       <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Nayan Gundaliya.</strong>
                  </h1>
                  <h4 className="my-3">
                    We are the team of talented developer making websites.
                  </h4>

                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-get-started">
                    {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} alt="Headermg" className="img-fluid animated p-3"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
