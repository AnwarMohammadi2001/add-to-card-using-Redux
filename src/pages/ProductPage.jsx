import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cardSlice";
import { getProducts } from "../store/productSlice"; // Correct import
import StatusCode from "../utils/StatusCode";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); // Added dependency
  if (status === StatusCode.LOADING) {
    return (
      <div className=" flex justify-center items-center ">
        <div className="loader mt-10"></div>
      </div>
    );
  }
  if (status === StatusCode.ERROR) {
    return <h1>Error </h1>;
  }

  const addToCart = (product) => {
    dispatch(add(product)); // Dispatching action correctly
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Products: {data.length} items</h1>
      <div className="row mt-5">
        {data.map((product) => (
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
                <Card.Title style={{ fontSize: "15px" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center bg-gray-900">
                <Button onClick={() => addToCart(product)} variant="primary">
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
