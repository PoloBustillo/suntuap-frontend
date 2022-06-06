/** @format */

import React from "react";
import { Media } from "reactstrap";
import language from "../../constant/langConfig.json";


const Currency = ({ icon }) => {


  return (
    <li className="onhover-div mobile-setting">
      <div>
        <Media src={icon} className="img-fluid" alt="" />
        <i className="fa fa-cog"></i>
      </div>
      <div className="show-div setting">
        <h6>Opciones</h6>
        <ul>

          <li>
            <a
              href={null}
              onClick={() => {
                console.log("opcion")
              }}
            >
              Subscribirse
            </a>
          </li>
          <li>
            <a
              href={null}
              onClick={() => {
                console.log("opcion")
              }}
            >
              Mis favoritos
            </a>
          </li>

        </ul>
      </div>
    </li>
  );
};

export default Currency;
