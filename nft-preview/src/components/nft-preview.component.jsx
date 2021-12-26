import React from "react";
import { ReactComponent as ClockSVG } from "./icon-clock.svg";
import { ReactComponent as EthSVG } from "../images/icon-ethereum.svg";
import "./nft-preview.styles.scss";
import avatar from "./image-avatar.png";
import equilibrium from "../images/image-equilibrium.jpg";

const NFTPreview = () => {
  return (
    <div className="outside-card">
      <div className="outer-image">
        <img className="image" src={equilibrium} />
      </div>

      <div className="title">Equilibrium #3429</div>
      <span className="description sub-text">
        {" "}
        Our Equilibrium collection promotes
      </span>
      <span className="sub-text"> balance and calm.</span>

      <div className=" bottom-row">
        <span className="eth">
          {" "}
          <EthSVG />
          0.041 ETH{" "}
        </span>
        <span className="time">
          {" "}
          <ClockSVG />3 days left
        </span>
      </div>

      <div>___________________________</div>

      <div className="last-row">
        <img className="avatar" src={avatar} />
        <span className="sub-text"> Creation of </span>
        <span className="main-text"> Jules Wyvern</span>
      </div>
    </div>
  );
};

export default NFTPreview;
