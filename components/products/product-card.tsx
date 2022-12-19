import { AiFillStar } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
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
            <div
              className="d-flex justify-content-between p-0"
              style={{ height: "30px" }}
            >
              <Badge className="mr-15px">
                <div className="d-flex flex-row align-items-center w-100">
                  <AiFillStar className="mr-2" />{" "}
                  <span style={{ marginLeft: "8px" }}>4.7</span>
                </div>
              </Badge>
              <Badge>50-79 min</Badge>
            </div>
            <p>
              <FaPlusSquare className="plus_icon" />
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
