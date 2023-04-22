

import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";
// import { BiPulse } from "react-icons/bi";


const MenuList = [
    {
        id:1,
        icon: <BsFillHouseFill />,
        name: "Home",
        path: '/'
    },
    {
        id:2,
        icon:<FaMusic/>,
        name: "Songs",
        path: '#'
    },
    {
        id:3,
        icon:<BsJournalAlbum/>,
        name: "Album",
        path: '#'
    },

]

export {MenuList};