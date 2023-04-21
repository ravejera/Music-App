import React from 'react'
import Banner from '../banner/Banner'
import AudioList from '../audioList/AudioList'


const MainMenu = () => { 
  return (
    <div className='main__menu'>
        <Banner />
        {/* <div className="menulist">
            <ul>
                <li><a href="3j">Songs</a></li>
                <li><a href="#f">Album</a></li>
                <li><a href="d">Popular</a></li>
            </ul>
        </div> */}
        <AudioList />
    </div>
  )
}

export default MainMenu