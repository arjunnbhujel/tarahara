import { useState } from "react"

import "../../utils/utils.css"
import "./navigation.css"
import logo from "../../assets/logo.png"

import menu from "./icons/menu.svg"
import close from "./icons/close.svg"

const Navigation = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="container nav">
      <img src={logo} alt="Tarahara Run Logo" className="logo" />
      <ul className={show ? "link" : "link idle"}>
        <li>
          <a href="#" className="a__link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="a__link">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="a__link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="a__link">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="a__link">
            Gallery
          </a>
        </li>
      </ul>
      <div className="menu">
        <img src={show ? close : menu} alt="menu" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Navigation
