import React, {useState, useEffect} from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Searchbox() {
    const [search, setSearch] = useState("");
    const [products, setProduct] = useState([]);
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProduct(data))
        //console.log(products)
  }, []);

  return (
    <>
    <Container >
    <input className='form-control me-2 mb-4 mt-4 ' type='search' name='src' 
    placeholder='Search The Products' 
    value={search} onChange={(e) =>{setSearch(e.target.value)}} 
    style={{padding: "20px"}}
     />
   <Row >
    {
    products.filter((product) => {
        if(search === ""){
            return product;
        }
        else if(product.title.toLowerCase().includes(search.toLocaleLowerCase()))
        {
            return product;
        }
      })
      .map((product) => {
        return(
        <>
        <Col key={product.id}  className="lg:top-20 relative lg:col-span1 col-span-2" >
        <Card style={{ width: '18rem' }} key={product.id}>
        <Card.Img variant="top" src={product.image}   />
        <Card.Body>
        <Card.Title>{product.title.substr(0, 15)}.. </Card.Title>
        <Card.Text>{product.description.substr(0, 45)}... </Card.Text>
        <Card.Text> $ {product.price}</Card.Text>
        </Card.Body>
      <Link className="btn btn-primary" to={`/searchbox/product/${product.id}`}>Details</Link>
        </Card>
        </Col>
        </>
        )
      })
    }
</Row>
 </Container>

    </>
  )
}

export default Searchbox;


