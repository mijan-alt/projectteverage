"use client"
import React from "react";
import { MotionAnimate } from "react-motion-animate";

function ActionBoxSection() {
  return (
    <MotionAnimate
      animation="fadeInUp"
      reset={true}
      distance={200}
      speed={1}
    >
      <div className="action-box-section section-spacing-bottom">
        <div className="container w-container">
          <div className="grid-action-box">
            <div
              id="w-node-f778d943-5f70-ac02-c8eb-4815a401ce0b-a401ce08"
              className="action-box-content"
            >
              <h3 className="text-white">Do You Have a Question?</h3>
              <h3 className="text-white">Do Not Wait.</h3>
            </div>
            <div className="action-box-button">
              <a href="/contactUs" className="button-rounded w-button">
                Let us Talk
              </a>
            </div>
            <div
              id="w-node-f778d943-5f70-ac02-c8eb-4815a401ce13-a401ce08"
              className="decoration shape-1"
            >
              <img
                src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/6217783883cd4448f7236e51_shape-02.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="decoration shape-4">
          <img
            src="https://assets-global.website-files.com/62172851fe5d176bbedd0632/62aabc50309f12bbe8388fa5_shape-02.svg"
            loading="lazy"
            alt=""
            className="shape-image-4"
          />
        </div>
      </div>
    </MotionAnimate>
  );
}

export default ActionBoxSection;
