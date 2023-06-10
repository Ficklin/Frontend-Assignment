import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./ProductList.css";
import CustAdvFeature from "./CustAdvFeature";

function ProductList(props) {
  const navigate = useNavigate();

  function handleViewProduct(productId) {
    navigate(`/products/${productId}`);
  }

  function productList(products) {
    if (products === null) return null;

    return products.map((product) => (
      <div>
        <Card key={product.id} style={{ width: "18rem", margin: "0.5rem" }}>
          <Card.Img
            variant="top"
            src={product.imageUrl}
            alt={product.fruitName}
          />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{product.fruitName}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Link to={`/products/${product.id}`} key={product.id}></Link>
            <Button
              variant="primary"
              onClick={() => handleViewProduct(product.id)}
            >
              View Description
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-start productListView">
        <ProductContext.Consumer>
          {({ products }) => (
            <>
              <CustAdvFeature />
              {productList(products)}
            </>
          )}
        </ProductContext.Consumer>
        {/* <p>ProductList - Note to confirm source of display.</p> */}
        <Outlet />
      </div>
    </>
  );
}
export default ProductList;
