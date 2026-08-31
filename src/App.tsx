import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <About />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
