import React from "react";
import "./Home.css";
import { ProductContext } from "./ProductContext";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeView">
      <h1 className="headerFormat">Welcome to First Fruits</h1>
      <img
        src="http://www.wallpapers-full-hd.com/backgrounds/garden-basket-fruits.jpg"
        alt="Fruit basket"
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: `50%`,
          height: "auto",
        }}
      />
      <br />
      <ProductContext.Consumer>
        {({ products }) => {
          // Logic to get three random products
          const shuffledProducts = products.sort(() => 0.5 - Math.random());
          const randomProducts = shuffledProducts.slice(0, 3);

          return (
            <div className="randomProductView">
              {randomProducts.map((product) => (
                <Card
                  key={product.id}
                  style={{ width: "18rem", margin: "0.5rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    alt={product.fruitName}
                  />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{product.fruitName}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                    ></Link>
                    <Button variant="primary" href={`/products/${product.id}`}>
                      View Product
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          );
        }}
      </ProductContext.Consumer>

      <br />
      <br />
      <footer>
        <p className="textFormat">First Fruits</p>
        <p className="textFormat">Created By T. Ficklin</p>
        <p className="textFormat">
          Front End Frameworks - React Final Exam Project
        </p>
        <p className="textFormat">May 2023</p>
      </footer>
    </div>
  );
}

export default Home;
