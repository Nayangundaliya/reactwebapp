import React from "react";
import { NavLink } from "react-router-dom";

const CardSer = (props) => {
  return (
    <>
      <div className="col-md-3 gy-4 col-10 mx-auto">
        <div className="card">
          <image className="card-img-top img-fluid p-1" src={props.imgsrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title ">{ props.title }</h5>
            <p className="card-text">
              { props.per}
            </p>
            <NavLink href="#" className="btn-ser">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSer;
