import React, { useState } from "react";
import { useParams, } from "react-router-dom";
import { useEffect } from "react";
import NewDetails from "./NewDetails";

function ProductDetails() {
    const SingleItem = "https://fakestoreapi.com/products"
    const[product, setProduct ] = useState([])
    const params = useParams();

   useEffect(() => {
    fetch(`${SingleItem}/${params.productId}`)
    .then((res) => res.json())
    .then((product) => setProduct(product))

   }, []); 
     
  
    return(
  <>
        <NewDetails product={product} showButton1={false} showButton2={true} / > 

  </>
    )
}
export default ProductDetails;