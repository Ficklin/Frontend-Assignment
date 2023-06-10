import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <Container fluid className="aboutBody aboutView">
      <div className="row">
        <div className="col">
          <h1>We sow and reap.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="col softened-image-edge">
          <img
            src="https://images.unsplash.com/photo-1558956874-c1abb6802202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Logo"
            width="75%"
            height="75%"
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
