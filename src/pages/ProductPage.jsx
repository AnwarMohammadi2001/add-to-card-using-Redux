import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Fetching data from API
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center">Products : {data.length} items</h1>
      </div>
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
                <Card.Title style={{ font: "10px" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary">Add to Cart</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
