import "../../utils/utils.css"
import "./hero.css"

import tarahara from "./img/tarahara.jpg"
import running from "./img/running.png"

const hero = () => {
  return (
    <div className="hero">
      <img src={tarahara} alt="Tarahara Image" className="tarahara" />
      <div className="hero--text">
        <h1 className="heading--hero">Tarahara Run</h1>
        <h2 className="subheading--hero">
          Run for Unity, Run for Health, Run for joy
        </h2>
      </div>
      <img src={running} alt="Running Illustration" />
    </div>
  )
}

export default hero
