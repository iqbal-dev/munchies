import { Col, Container, Row } from "reactstrap";
import HeroSection from "../components/HeroSection/hero-section";
import Test from "../components/Test";
import Navbar from "../components/layout/nav-bar";
import ProductCard from "../components/product-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <Test />
        <Row>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
          <Col md={3} className="mb-4">
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
