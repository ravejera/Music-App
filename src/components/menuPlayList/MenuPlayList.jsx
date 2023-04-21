import React from 'react'
import { FaPlus } from "react-icons/fa"
import { BsMusicNoteList, BsTrash } from "react-icons/bs"
import { PlayList } from '../playlist/PlayList'

const MenuPlayList = () => {
    return (
        <div className='playlist__container'>
            <div className="name__container">
                <p>Playlist</p>
                <i><FaPlus /></i>
            </div>
            <div className="playlist__scroll">
                {
                    PlayList && PlayList.map((list) => (
                        <div className="playlist" key={list.id}>
                           
                            <p> <i className='playlist__icon list'> <BsMusicNoteList /> </i>{list.name}</p>
                            <i className='playlist__icon trash'> <BsTrash /> </i>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MenuPlayList