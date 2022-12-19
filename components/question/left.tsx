import { Col, FormGroup, Row } from "reactstrap";
import Input from "../ui/input";
import Textarea from "../ui/textarea";

const Left = () => {
  return (
    <div>
      <h5>Do you have a question or want to become a seller?</h5>
      <p>Fill this form and our manager will contact you next 48 hours.</p>
      <form>
        <Row>
          <Col>
            <FormGroup>
              <Input
                inputType="text"
                placeholder="Enter your name"
                onChange={() => {}}
                className="py-2 px-4 rounded border-0"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                inputType="text"
                placeholder="Enter your name"
                onChange={() => {}}
                className="py-2 px-4 rounded border-0"
              />
            </FormGroup>
          </Col>
        </Row>
        <Textarea
          placeholder="message"
          className="py-2 px-4 rounded border-0"
        />
      </form>
    </div>
  );
};

export default Left;
