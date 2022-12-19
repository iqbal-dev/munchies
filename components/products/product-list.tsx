import { Col, Row } from "reactstrap";
import ProductCard from "./product-card";

const ProductList = () => {
  return (
    <>
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
    </>
  );
};

export default ProductList;
