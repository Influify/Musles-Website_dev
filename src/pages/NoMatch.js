import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <Container className="center">
        <h1>404</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link to={"/"}>
          <Button variant="primary">Go Home</Button>
        </Link>
      </Container>
    </div>
  );
};
export default NoMatch;
