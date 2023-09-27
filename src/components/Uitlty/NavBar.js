import Nav from 'react-bootstrap/Nav';
import React  from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import { useSelector } from 'react-redux';

function NavBar() {
  const Cart = useSelector(state => state.Cart);

    return(
<>

<Nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/"> E.MARKET </Link>

     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
        <link className="nav-link active" aria-current="page" to="#"></link>
       </li>
        <Link className="nav-link " to="/Categories" role="button" data-bs-toggle="dropdown" 
               aria-expanded="false"></Link>
          <ul className="dropdown-menu"></ul>  
       <li className="nav-item dropdown">
         <Link className="nav-link " to="/Categories" role="button" 
               data-bs-toggle="dropdown" aria-expanded="false"></Link>
       </li>     
       <li className="nav-item">       
         <Link className="nav-link disabled" aria-disabled="true" to="/"></Link> 
       </li>   
        </ul>
     <form className="d-flex mb-0 " role="search" >
        <Link  to="./Searchbox" variant="outline-primary" className="btn btn-outline-success me-3" type="submit">Search</Link>
     </form><div>
    
      
      <Link to="./Cart" variant="outline-primary"  className="btn btn-outline-success me-3" 
            style={{ position: 'relative'}} > Cart 
      <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
            style={{ position: 'absolute', color:'white', width:'1.5rem', height: '1.5rem', 
            bottom:0, right:0, transform: 'translate(24%, 24%)'}}>{Cart.length}</div>
      </Link>  
     </div>
      <div>
    
       <Link to="/Login" variant="outline-primary"  className="btn btn-outline-success me-3" 
            style={{ position: 'relative'}} > Log in/out </Link> 
       </div>
     
    </div>     
  </div>         
</Nav>        
</>     
      
)      
}    
export default NavBar;
