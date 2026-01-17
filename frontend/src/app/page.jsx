import { About, HeroSection, Reservation, Team, WhoWeAre, Qualities, MenuHelloPage, Footer} from "@/widgets";
import "./page.css"
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <MenuHelloPage />
      <WhoWeAre />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}
