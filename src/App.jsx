import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Skills from './Pages/Skills'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App