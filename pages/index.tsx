import { Container } from "reactstrap";
import HeroSection from "../components/HeroSection/hero-section";
import Navbar from "../components/layout/nav-bar";
import Products from "../components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <Products />
      </Container>
    </>
  );
}
