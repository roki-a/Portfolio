import Nav from './components/Nav.jsx'
import Cover from './components/Cover.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Training from './components/Training.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Cover />
      <main className="sheet">
        <div className="wrap">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Training />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  )
}
