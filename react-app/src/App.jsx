import useReveal from './hooks/useReveal.js'

import Nav from './components/nav/Nav.jsx'
import Hero from './components/sections/Hero.jsx'
import Manifesto from './components/sections/Manifesto.jsx'
import PoemBlockA from './components/sections/PoemBlockA.jsx'
import PoemBlockB from './components/sections/PoemBlockB.jsx'
import BigStatement from './components/sections/BigStatement.jsx'
import Services from './components/sections/Services.jsx'
import PoemBlockC from './components/sections/PoemBlockC.jsx'
import Process from './components/sections/Process.jsx'
import PoemBlockD from './components/sections/PoemBlockD.jsx'
import Areas from './components/sections/Areas.jsx'
import Reviews from './components/sections/Reviews.jsx'
import FinalCta from './components/sections/FinalCta.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/sections/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  // Run the IntersectionObserver reveal-on-scroll on mount.
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Manifesto />
      <PoemBlockA />
      <PoemBlockB />
      <BigStatement />
      <Services />
      <PoemBlockC />
      <Process />
      <PoemBlockD />
      <Areas />
      <Reviews />
      <FinalCta />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
