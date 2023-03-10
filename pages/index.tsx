import HeroSection from "../components/HeroSection/hero-section";
import Blog from "../components/blog";
import Navbar from "../components/layout/nav-bar";
import Products from "../components/products";
import Question from "../components/question";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products />
      <Blog />
      <Question />
    </>
  );
}
