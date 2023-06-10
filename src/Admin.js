import React, { useContext } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import "./Admin.css";

function AdminList(props) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(ProductContext);

  function handleDeleteProduct(productId) {
    deleteProduct(productId);
    navigate("/admin");
  }

  function editViewProduct(productId) {
    navigate(`/admin/products/${productId}`);
  }

  function adminList(products) {
    if (products === null) return null;

    return products.map((product) => (
      <CardGroup>
        <Card key={product.id} style={{ width: "18rem", margin: "0.7rem" }}>
          <Card.Img
            variant="top"
            src={product.imageUrl}
            alt={product.fruitName}
          />
          <Card.Body>
            <Card.Title>{product.fruitName}</Card.Title>
            <Card.Text>
              {product.description}
              <br />
              Source Location: {product.location}
              <br />
              Price: ${product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center gap-4">
            <Link to={`/products/${product.id}`} key={product.id}></Link>
            <Button
              variant="warning"
              onClick={() => editViewProduct(product.id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDeleteProduct(product.id)}
            >
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    ));
  }

  return (
    <>
      <div className="d-flex flex-wrap justify-content-start adminview">
        <ProductContext.Consumer>
          {({ products }) => adminList(products)}
        </ProductContext.Consumer>
        {/* <p>Admin - Note to confirm source of display</p> */}
        <Outlet />
      </div>
    </>
  );
}

export default AdminList;
