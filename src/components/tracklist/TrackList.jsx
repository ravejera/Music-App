import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs"
import { FaDesktop } from "react-icons/fa"



const TrackList = () => {
  return (
    <div className='tracklist'>
        <div className="top">
            <img src="/assets/vinyl-gf656bfc78_1280.png" alt="music" />
            <p>sample music <span>artist</span></p>
        </div>
        <div className="bottom">
            <i> <BsFillVolumeUpFill /> </i>
            <input type="range" />
            <i> <BsMusicNoteList /> </i>
            <i> <FaDesktop /></i>
        </div>
    </div>
  )
}

export default TrackList