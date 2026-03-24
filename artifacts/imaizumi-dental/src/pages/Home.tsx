import { useSEO } from "@/hooks/useSEO"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/dental/Hero"
import { Treatment } from "@/components/dental/Treatment"
import { FirstVisit } from "@/components/dental/FirstVisit"
import { Doctor } from "@/components/dental/Doctor"
import { Features } from "@/components/dental/Features"
import { Checkup } from "@/components/dental/Checkup"
import { Gallery } from "@/components/dental/Gallery"
import { News } from "@/components/dental/News"
import { Contact } from "@/components/dental/Contact"
import { MapSection } from "@/components/dental/MapSection"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  useSEO()
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <Hero />
        <Treatment />
        <FirstVisit />
        <Doctor />
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
