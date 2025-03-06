import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cardSlice";

const CardPage = () => {
  const cardProducts = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const removefromCard = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center">Products : {cardProducts.length} items</h1>
      </div>
      <div className="row mt-5">
        {cardProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Card style={{ width: "18rem", height: "350px" }}>
              <div className="d-flex justify-content-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "130px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title style={{ font: "10px" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  onClick={() => removefromCard(product.id)}
                  variant="danger"
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
