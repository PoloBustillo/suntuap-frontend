/** @format */

import React, { Fragment } from "react";
import Countdown from "react-countdown";

const CountdownComponent = ({ date }) => {
  const Completionist = () => <span>Gracias por apoyar!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="timer-box">
          <div className="timer">
            <div className="timer-p" id="demo">
              <span>
                {days}
                <span className="padding-l">:</span>
                <span className="timer-cal">Dias</span>
              </span>
              <span>
                {hours}
                <span className="padding-l">:</span>
                <span className="timer-cal">Hrs</span>
              </span>
              <span>
                {minutes}
                <span className="padding-l">:</span>
                <span className="timer-cal">Min</span>
              </span>
              <span>
                {seconds}
                <span className="timer-cal">Seg</span>
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(Date.parse(date));


  return (
    <Fragment>
      <Countdown date={coundown} renderer={renderer} />
    </Fragment>
  );
};

export default CountdownComponent;
