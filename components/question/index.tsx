import { Col, Container, Row } from "reactstrap";
import Left from "./left";
import Right from "./right";

const Question = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#F7F8FA" }}>
      <Container>
        <Row className="align-items-center py-5">
          <Col md={6}>
            <Left />
          </Col>
          <Col md={6}>
            <Right />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Question;
