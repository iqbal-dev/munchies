import { Col, Container, Row } from "reactstrap";
import BlogCard from "./blog-card";

const Blog = () => {
  return (
    <div className="py-5">
      <Container>
        <h5 className="py-3"> Our Blog</h5>
        <Row>
          <Col md={3}>
            <BlogCard />
            <BlogCard />
          </Col>
          <Col md={6}>
            <BlogCard />
          </Col>
          <Col md={3}>
            <BlogCard />
            <BlogCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
