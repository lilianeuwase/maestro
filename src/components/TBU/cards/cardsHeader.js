import * as React from "react";
import { Avatar } from "react-lorem-ipsum";

export const CardHeader = () => (
  <div className="headerCard">
    <span className="dateCard">CBT 4 STEPS</span>
    <h1>How CBT Works</h1>
    <div className="avatarCard">
    <img
              className="card-image"
              src={require("../../../assets/5.png")}
              alt=""
            />
    </div>
  </div>
);
