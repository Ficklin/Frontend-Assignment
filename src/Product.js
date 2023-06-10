import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Alert, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./Product.css";

function Product(props) {
  let params = useParams();
  let navigate = useNavigate();

  let { getProduct } = useContext(ProductContext);
  let [product, setProduct] = useState();
  let [error, setError] = useState();

  useEffect(() => {
    setError(null);
    async function fetchProduct() {
      await getProduct(params.productId)
        .then((product) => setProduct(product))
        .catch((message) => setError(message));
    }
    fetchProduct();
  }, [params.productId, getProduct]);

  function loading() {
    return (
      <div className="w-25 text-center">
        <Spinner animation="border" />
      </div>
    );
  }
  function errorMessage() {
    return (
      <Alert variant="danger">
        There was an error attempting to load this product: {error}
      </Alert>
    );
  }

  function productCard() {
    let { id, fruitName, description, location, price, imageUrl } = product;

    return (
      <div className="productView selectedProductView">
        <Card key={id} style={{ width: "36rem", margin: "1rem" }}>
          <Card.Img variant="top" src={imageUrl} alt={fruitName} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{fruitName}</Card.Title>
            <Card.Text>
              {description}
              <br />
              Source Location: {location}
              <br />
              Price: ${price}
              {/* <p>Product - Note to confirm display source.</p> */}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => navigate("/products")}>
              Go back to Product List
            </button>
          </Card.Footer>
        </Card>
      </div>
    );
  }

  if (error) return errorMessage();
  if (product === undefined) return loading();
  return product.id !== parseInt(params.productId) ? loading() : productCard();
}

export default Product;
