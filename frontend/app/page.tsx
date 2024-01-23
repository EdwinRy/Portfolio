import { NavBar } from "./ui/NavBar"
import { IntroScreen } from "./IntroScreen"
import { Footer } from "./ui/Footer"
import { About } from "./components/About"
import { Stack } from "./components/Stack"
import { Projects } from "./components/Projects"

export default function Home() {
  return (
    <>
      <NavBar />
      <IntroScreen />
      <About />
      <Stack />
      <Projects />
      <Footer />
    </>
  )
}

