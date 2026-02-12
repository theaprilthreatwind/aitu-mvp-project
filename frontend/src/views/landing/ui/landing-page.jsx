import styles from "./page.module.css";
import { Search } from "@/widgets/landing/search";
import {
  About,
  Qualities,
  HeroSection,
  WhoWeAre,
  Team,
  Reservation,
  Footer,
  LandingMenu,
} from "@/widgets/landing";

export function LandingPage() {
  return (
    <>
      <HeroSection styles={styles} />
      <About styles={styles} />
      <Search />
      <Qualities styles={styles} />
      <LandingMenu styles={styles} />
      <WhoWeAre styles={styles} />
      <Team styles={styles} />
      <Reservation styles={styles} />
      <Footer styles={styles} />
    </>
  );
}
