import "../../utils/utils.css"
import "./about.css"

import member from "./img/member.jpg"
const About = () => {
  return (
    <div className="container about">
      <h1 className="about--heading">About Tarahara Run</h1>
      <p className="about--paragraph">
        Welcome to Tarahara Run, a vibrant community brought together by a
        shared passion for running and a commitment to making a positive impact.
        We are a not-for-profit organization dedicated to promoting health,
        unity, and community engagement through the joy of running.
      </p>
      <p className="about--paragraph">
        At Tarahara Run, we believe in the transformative power of running. Our
        mission is to inspire individuals to lead healthier lifestyles, foster a
        sense of community, and contribute to meaningful social change. Through
        weekly runs and a variety of running events, we aim to create a space
        where every step counts towards a better tomorrow.
      </p>
      <p className="about--paragraph">
        Tarahara Run invites you to lace up your shoes and join us on a journey
        of fitness, friendship, and fulfillment. Whether you're running for
        personal goals, the joy of being active, or a shared cause, Tarahara Run
        is the place where every stride matters.
      </p>
      <img src={member} alt="" />
    </div>
  )
}

export default About
