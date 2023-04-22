import React from "react";
import { FaHeadphones } from "react-icons/fa";

const Banner = ({ album }) => {
  return (
    <div className="banner">
      <img
        src="/assets/pexels-bryan-catota-3756766.jpeg"
        alt=""
        className="banner__img"
      />
      <div className="content">
        <div className="artist">
          <div className="left">
            <p>
              <i>
                <FaHeadphones />
              </i>
              {album?.name || "Albums"}
            </p>
          </div>
        </div>
      </div>
      <div className="bottom__layer"></div>
    </div>
  );
};

export default Banner;
