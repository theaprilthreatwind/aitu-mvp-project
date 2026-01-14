import { About, HeroSection, Reservation, Team, WhoWeAre, Qualities, Menu, Footer} from "@/widgets";
import "./page.css"
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoWeAre />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}
