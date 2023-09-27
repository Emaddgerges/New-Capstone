import React from "react"
import { Link } from "react-router-dom";
import "../components/styles/Product.css"
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from './RTK/Slises/Cart-Slice';

const Product = (props) => {
 
   const {product, showButton1, showButton2} = props;
   const products = useSelector((state) => state.products);
     const dispatch = useDispatch();

   return(
 
    <Container className="py-2 px2">
    <Row className="py-2 px2">
    <Col key={product.id}  className="lg:top-20 relative lg:col-span1 col-span-2 mx-auto">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image}  />
    <Card.Body>
    <Card.Title>{product.title.substr(0, 15)}.. </Card.Title>
    <Card.Text>{product.description.substr(0, 45)}... </Card.Text>
    <Card.Text> $ {product.price}</Card.Text>
    </Card.Body>   
    {showButton1 &&  <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
    <Card.Body>
    {showButton2 &&  <Link className="btn btn-primary" to="/">Back To All</Link> } 
    <br></br>
    <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    )
}

export default Product;
