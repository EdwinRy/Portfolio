import { NavBar } from "./ui/NavBar"
import { IntroScreen } from "./ui/IntroScreen"
import { Footer } from "./ui/Footer"
import { About } from "./ui/About"
import { Stack } from "./ui/Stack"
// import { Projects } from "./ui/Projects"

export default function Home() {
  return (
    <>
      <NavBar />
      <IntroScreen />
      <About />
      <Stack />
      {/* <Projects /> */}
      <Footer />
    </>
  )
}

