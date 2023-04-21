import React from 'react'


import { FaSupple, FaEllipsisH } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import Menu from '../menu/Menu'
import { MenuList } from '../menuList/MenuList'
// import MenuPlayList from '../menuPlayList/MenuPlayList' 
import TrackList from '../tracklist/TrackList'


const LeftMenu = () => {
  return (
    <div className="left__menu"> 
      <div className="logo__container"> 
         <i><FaSupple className='music__logo' /> </i>
         <h2>music</h2>
         <i><FaEllipsisH className='dot__logo'/> </i>
         </div>
      <div className="search__box">
        <input type="text" placeholder='Search...'/>
        <i> <BiSearchAlt className='search__icon' /> </i>
      </div>

      <Menu title={"Menu"} menuObject={MenuList}/>
      {/* <MenuPlayList /> */}
      <TrackList />
    </div> 
  )
}

export default LeftMenu 