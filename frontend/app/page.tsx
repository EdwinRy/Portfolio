import { IntroScreen } from "./ui/IntroScreen"
import { Footer } from "./ui/Footer"
import { About } from "./ui/About"
import { TechStack } from "./ui/TechStack"
import { NavBar } from "@components/NavBar"
import { Projects } from "./ui/Projects"

export default function Home() {
  return (
    <>
      <NavBar />
      <IntroScreen />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </>
  )
}

