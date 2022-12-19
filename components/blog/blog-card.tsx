import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
const BlogCard = () => {
  return (
    <div className="mb-4">
      <Card style={{ border: "none" }} className="shadow">
        <CardImg
          top
          width="100%"
          src="https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
