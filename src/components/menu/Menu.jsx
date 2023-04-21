import { useEffect } from 'react'



const Menu = ({title, menuObject}) => {

    useEffect(() => {
        const allLi = document
                // .querySelector(".menu__container")
                .querySelectorAll("li")

                function changeMenuActive(){
                    allLi.forEach((n) => n.classList.remove("active"))
                    this.classList.add("active")
                }
                allLi.forEach(n => n.addEventListener("click", changeMenuActive));
    }, [])
  return (
    <div className='menu__container'>
        <p className='title'>{title}</p>

        <ul>
            {
                menuObject && menuObject.map((item) =>  (
                    <li key={item.id}>
                        <a href="#j">
                            <i>{item.icon}</i>
                            <span>{item.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu