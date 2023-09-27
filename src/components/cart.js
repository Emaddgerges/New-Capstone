import React from 'react'
import { Container, Button, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFfomCart, clearCart, add, } from './RTK/Slises/Cart-Slice'



function Cart ()  {
   
  const Cart = useSelector(state => state.Cart);
   const dispatch = useDispatch()
   const totalPrice = Cart.reduce ((totPrice, product) =>{
    totPrice += product.price * product.quantity ;
    return totPrice;
   }, 0)


 const checkout=() =>{
  alert("This Website Under Construction ...Thank You") 
 }

return (

    <>
   <Container>
   <Button variant="danger" onClick={() => dispatch(clearCart())} className='mb-4 mt-4'>Clear  Cart</Button>
   <div><h3>Total Price: $ {totalPrice.toFixed(2)}</h3></div>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {Cart.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td><Image src={product.image} alt={product.title} style={{width: "120px", height: "120px"}}></Image></td>
            <td>$ {product.price}</td>
            <td>{product.quantity}</td>
            <td><Button variant="danger" onClick={() =>  dispatch(deleteFfomCart(product))}>Delete</Button></td>
            <td><button onClick={() => dispatch(add(product))}>+</button></td>
            
            </tr>
          ))} 
        </tbody>
        
      </Table>
      <br></br>
        <Button variant="primary" size="lg" className="mb-3 " onClick={checkout}> ChekOut</Button>
    </Container>
    </>
  );
    }
export default Cart;