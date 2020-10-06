import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Div } from "atomize";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const MerchPage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  if (!products) return <Loading />;
  return (
    <div className="product-page-layout">
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} size="3">
              <Row>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="merch-page" style={{ width: "18rem" }}>
                    <Div
                      h="20rem"
                      bgImg={product.images[0].src}
                      bgSize="cover"
                      bgPos="center center"
                      shadow="3"
                      hoverShadow="4"
                      transition="0.3s"
                      m={{ b: "1.5rem" }}
                    ></Div>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Link to={"/product/${product.id}"} />
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MerchPage;
