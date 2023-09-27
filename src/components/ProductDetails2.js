import React, { useState } from "react";
import { useParams, } from "react-router-dom";
import { useEffect } from "react";
import NewDetails2 from "./NewDetails2";

function ProductDetails2() {
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

        <NewDetails2 product={product} showButton1={false} showButton2={true} / > 

   </>

  )
}
export default ProductDetails2;