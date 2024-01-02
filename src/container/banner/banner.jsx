import "../../utils/utils.css"
import { useEffect, useState } from "react"
import "./banner.css"

const Banner = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("3/15/2024").getTime()
  )

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setInterval(() => setNewTime(), 1000)
  }, [])
  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime()

      const distanceToDate = countdownDate - currentTime

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      )
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      days = `${days}`
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`
      }

      setState({ days: days, hours: hours, minutes, seconds })
    } else {
      setState("We will update you of next event")
    }
  }

  return (
    <div className="container banner">
      <div className="banner--text">
        <p className="banner--paragraph">
          Are you ready to run in 10K Tarahara Run Event?
        </p>
        <p className="banner--paragraph ">March 9, 2024</p>
      </div>
      <div className="timer">
        <ul className="timer--ul">
          <li className="timer--list">
            <span id="days">{state.days || "0"}</span>days
          </li>
          <li className="timer--list">
            <span id="hours">{state.hours || "00"}</span>Hours
          </li>
          <li className="timer--list">
            <span id="minutes">{state.minutes || "00"}</span>Minutes
          </li>
          <li className="timer--list">
            <span id="seconds">{state.seconds || "00"}</span>Seconds
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
