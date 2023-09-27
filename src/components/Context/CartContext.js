// import React, { createContext, useContext, useState } from 'react';


// const ShoppingCartContext = createContext({});


//     const ShoppingCartProvider = ({ children }) => {
//     const[ CartProducts, setCartProducts] = useState ([ ]) ;
//     const getItemQuantity= (id) => {
//         return CartProducts.find((product) => product.id === id)?.quantity || 0;
//     };
//     const increaseCartQuantity = (id) => {
//         setCartProducts((currProduct) => {
//             if( currProduct.find((product) => product.id ===id) == null) {
//                 return[...currProduct, { id, quantity: 1}];    
//             } else {
//                 return currProduct.map((product) => {
//                     if(product.id === id) {
//                         return { ...product, quantity: product.quantity + 1 };
//                     } else {
//                         return product;
//                     }
//                 })
//             }
//         })
//     }

//     const decreaseCartQuantity = (id) => {
//         setCartProducts((currProduct) => {
//             if( currProduct.find((product) => product.id === id) == null) {
//                 return currProduct.filter((product) => product.id !== id );    
//             } else {
//                 return currProduct.map((product) => {
//                     if(product.id === id) {
//                         return { ...product, quantity: product.quantity - 1 };
//                     } else {
//                         return product;
//                     }
//                 })
//             }
//         })
//     }

//     const removeProductFromCart = (id) => {
//         setCartProducts((currProduct) => currProduct.filter((product) => product.id !== id));
//     };


//   return (
//     <ShoppingCartContext.Provider 
//     value={{ 
//         CartProducts, 
//         getItemQuantity, 
//         decreaseCartQuantity, 
//         increaseCartQuantity, 
//         removeProductFromCart 
//     }}>
//       {children}
//     </ShoppingCartContext.Provider>
//   );
// };
// export default ShoppingCartProvider;

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// };