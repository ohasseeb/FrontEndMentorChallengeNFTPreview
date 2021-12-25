import React from "react";
import { ReactComponent as ClockSVG } from "./icon-clock.svg";
import { ReactComponent as EthSVG } from "../images/icon-ethereum.svg";
import "./nft-preview.styles.scss";
import clock from "./image-avatar.png";
import equilibrium from "../images/image-equilibrium.jpg";

const NFTPreview = () => {
  return (
    <div className="outside-card">
      <div>
        <img classname="image" src={equilibrium} />
      </div>

      <div className="title">Equilibrium #3429</div>
      <div className="description">
        {" "}
        Our Equilibrium collection promotes balance and calm.
      </div>

      <div className=" bottom-row">
        <span>
          {" "}
          <EthSVG />
          0.041 Eth{" "}
        </span>
        <span>
          {" "}
          <ClockSVG />3 days left
        </span>
      </div>

      <div>___________________________</div>

      <span> Creation of </span>
      <span>Jules Wyvern</span>
    </div>
  );
};

export default NFTPreview;
