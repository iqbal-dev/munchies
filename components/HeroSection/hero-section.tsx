import { Col, Container, Row } from "reactstrap";
import LeftSide from "./left-side";
import RightSide from "./right-side";
const HeroSection = () => {
  return (
    <div className="bg-dark py-5">
      <Container>
        <Row className="align-items-center w-100 justify-content-between">
          <Col md={5}>
            <LeftSide />
          </Col>
          <Col md={5}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
