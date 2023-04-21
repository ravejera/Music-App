import React from 'react'
import {  FaHeadphones  } from "react-icons/fa"


// import Image1 from "../assets/pexels-bryan-catota-3756766.jpeg"


const Banner = () => {
  return (
    <div className='banner'>
        <img src="/assets/pexels-bryan-catota-3756766.jpeg" alt="" className='banner__img'/>
        <div className="content">
            {/* <div className="breadCramp">
                <p>Home <span>/Popular Artist</span></p>
                <i> <FaEllipsisH /></i>
            </div> */}

            <div className="artist">
                <div className="left">
                    <div className="name">
                        <h2>playlist</h2>
                     
                    </div>
                    <p><i><FaHeadphones /></i>monthly listeners</p>
                </div>
            </div>
        </div>
        <div className="bottom__layer"></div>
    </div> 
  )
}

export default Banner