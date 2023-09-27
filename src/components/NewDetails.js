import React from "react"
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './RTK/Slises/Cart-Slice';


function NewDetails(props) {

  const {product, showButton1, showButton2} = props;
  const products = useSelector((state) => state.products);
    //  console.log(products)
     const dispatch = useDispatch();
   return(
    <Container>
    <Row>
    <Col key={product.id}  className="lg:top-20 relative lg:col-span1 col-span-2">
    <Card style={{ width: '30rem', }}>
    <Card.Img variant="top" src={product.image}  />
    <Card.Body>
    <Card.Title>{product.title} </Card.Title>
    <Card.Text>{product.description} </Card.Text>
    <Card.Text> $ {product.price}</Card.Text>
    </Card.Body>
    {showButton1 && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
    {showButton2 && <Link className="btn btn-primary" to="/">Back To All</Link>}
    <Card.Body>
    <br></br>
    <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    )
}

export default NewDetails;

