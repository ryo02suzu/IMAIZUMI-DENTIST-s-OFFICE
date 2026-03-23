import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/dental/Hero"
import { Treatment } from "@/components/dental/Treatment"
import { About } from "@/components/dental/About"
import { Features } from "@/components/dental/Features"
import { Checkup } from "@/components/dental/Checkup"
import { Gallery } from "@/components/dental/Gallery"
import { News } from "@/components/dental/News"
import { Contact } from "@/components/dental/Contact"
import { MapSection } from "@/components/dental/MapSection"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <Hero />
        <Treatment />
        <About />
        <Features />
        <Checkup />
        <Gallery />
        <News />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
