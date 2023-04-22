import React from "react";
import Banner from "../banner/Banner";
import AudioList from "../audioList/AudioList";

const Main = ({ albums }) => {
  return (
    <div className="main__menu">
      <Banner />
      <AudioList albums={albums} />
    </div>
  );
};

export default Main;
