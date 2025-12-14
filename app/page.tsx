import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import AboutSection from '@/components/AboutSection'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsShowcase />
      <ContactSection />
    </>
  )
}