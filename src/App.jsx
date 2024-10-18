import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from'./components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks />
    </div>
    </>
  )
}

export default App
