import { Card, CardBody, CardImg } from "reactstrap";
import Badge from "../ui/badge";
const ProductCard = () => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
          alt="Card image cap"
        />
        <CardBody>
          <div className="d-flex justify-content-between">
            <p>Home made pizza</p>
            <p>$19</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="d-flex justify-content-between">
              <Badge>4.7</Badge>
            </p>
            <p>$19</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
