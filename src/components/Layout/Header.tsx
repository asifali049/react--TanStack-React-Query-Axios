import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="Header">
        <div className='NavBar'>
        <NavLink to="/">ReactQuery</NavLink>
            <ul  className='NavBarList' >
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                     <NavLink to="/planets">Planets</NavLink>
                </li>
                <li>
                     <NavLink to="/characters">characters</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}
