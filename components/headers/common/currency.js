/** @format */

import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Media } from "reactstrap";
import language from "../../constant/langConfig.json";
import i18next from "../../constant/i18n";

const Currency = ({ icon }) => {
  var { data } = [];


  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <li className="onhover-div mobile-setting">
      <div>
        <Media src={icon} className="img-fluid" alt="" />
        <i className="fa fa-cog"></i>
      </div>
      <div className="show-div setting">
        <h6>Configuraciones</h6>
        <ul>
          {language.map((item, i) => (
            <li key={i}>
              <a
                href={null}
                onClick={() => {
                  changeLanguage(item.val);
                }}
              >
                {item.lang}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Currency;
