import React from "react";

import wow from "../../assets/images/bloco_5.svg";
import men from "../../assets/images/bloco_6.svg";
import pop from "../../assets/images/bloco_pop.svg";

import './styles.css';

function GridHome() {
  return (
    <div className="container-fluid home_grid pl-5 pr-5 pt-3">
      <div className="row">
        <div className="col-12 col-md-4">
          <img src={wow} alt="" className="w-100 mb-4" />
          <img src={men} alt="" className="w-100" />
        </div>
        <div className="col-12 col-md-8">
          <div className="pop_container">
            <div className="pop_img w-100">
              <img src={pop} alt="" className="w-100" />
              <button className="btn btn-default">POP</button>
            </div>
            <div className="pop_text w100">
              <p className="title">Let the Game begin</p>
              <p className="subtitle">
                Registration is on - get ready for the Open
              </p>
              <button className="btn btn-default">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridHome;
