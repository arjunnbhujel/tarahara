import "../../utils/utils.css"
import "./navigation.css"
import logo from "../../assets/logo.png"

const Navigation = () => {
  return (
    <div className="container nav">
      <img src={logo} alt="Tarahara Run Logo" className="logo" />
      <ul className="link">
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
    </div>
  )
}

export default Navigation
