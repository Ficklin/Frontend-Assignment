import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductForm from "./ProductForm";
import Admin from "./Admin";
import ProductList from "./ProductList";
import CustAdvFeature from "./CustAdvFeature";

export default class MainNavbar extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar bg="dark" variant={"dark"} expand="lg" fixed="top">
              {/* Added fixed="top" to keep navbar at top of page */}
              <Container fluid>
                <Navbar.Brand href="#">
                  <img
                    src="https://images.unsplash.com/photo-1507063667056-ed146269b83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />{" "}
                  First Fruits
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px", margin: "auto" }}
                    // Added margin: auto to center links
                    navbarScroll
                  >
                    <Nav.Link as={Link} to={"/"}>
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>
                      About
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/products"}>
                      Products
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/admin"}>
                      Admin-Edit
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/new"}>
                      Admin-New Product
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div style={{ marginTop: "40px" }}>
            {/* Add marginTop so that navbar was not over webiste content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/products" element={<ProductList />}>
                <Route path="advfeature" element={<CustAdvFeature />} />
              </Route>
              <Route path="products/:productId" element={<Product />} />
              <Route path="admin" element={<Admin />} />
              <Route
                path="admin/products/:productId"
                element={<ProductForm />}
              />
              <Route path="new" element={<ProductForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
