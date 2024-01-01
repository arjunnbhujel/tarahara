import "./modern-normalize.css"
import react from "./assets/react.svg"
import Navigation from "./container/navigation/navigation"
import Hero from "./container/hero/hero"
import Banner from "./container/banner/banner"
import About from "./container/about/about"

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Banner />
      <About />
    </div>
  )
}

export default App
