/* eslint-disable no-unused-vars */
import React from "react";
import img from "../card/img/لاو.jpg"


const Card = () => {
  return (
    <div className="card">
      <div className="card--image">
        <img src={img} alt="" />
      </div>
      <div className="card--description">
        <h2>Light And Dark Mode</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper leo mollis volutpat vitae ut.</p>
      </div>
    </div>
  );
};

export default Card;
