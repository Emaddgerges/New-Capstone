import React, { useEffect, useState } from 'react'
import { Col, Container, Row,  } from 'react-bootstrap';
import Product from './Product';

function Cat () {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  
    const getProductes = () => {
        fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
 
    const getCategories = () => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }

    const getProductByCategory =(catName) =>{
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
        .then(res => res.json())
        .then((data) => setProducts(data));
    }

    useEffect(() => {
        getProductes()
         getCategories()
        // getProductByCategory()
  }, [])

    return (

<Container >
<Row >

    <Col className="category-bar"> 
    <button onClick={() => {getProductes()}}
    className="btn btn-outline-success" >All categories</button>
     
{
   categories.map((cat) => {
    return(<button key={cat} onClick={() => {getProductByCategory(cat)}}
     className="btn btn-outline-success m-3">{cat}</button> )
   })
   
}
 </Col>   
 <Container className='py-4'>
 <Row>
 <Col>
 <div className="row"><h1 >Products</h1>
    {products.map((product) => {
       return(
        <div className="col-3" key={product.id} >
            <Product product={product} showButton1={true} />
            </div>
        )
    })}
        </div>
        </Col></Row>
       </Container>
     </Row>
</Container>
    )
}

export default Cat;