import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'

import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhyHireMe from '@/components/WhyHireMe'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyHireMe />
      <Process />
      <TechStack />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}