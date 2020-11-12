import React from "react";
// import banner_img from '../../assets/images/banner.svg';

import "./styles.css"

function Banner() {
  return (
    <div className="container-fluid home_banner pl-0 pr-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <h1>
              Background <i>and</i>
              <br /> development
            </h1>
            <h2>
              Convergent the dictates of the consumer: background and
              development
            </h2>
            <button class="btn btn-default" type="submit">
              Call to action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
