import { createSlice  } from "@reduxjs/toolkit" ;



export const CartSlice =  createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) =>{
     const findProudct = state.find((product) => product.id === action.payload.id);
      if( findProudct ){
        findProudct.quantity += 1 ;
      } else{
        const productClone ={ ... action.payload, quantity : 1}
        state.push(productClone);
      }
    },
    deleteFfomCart: (state, action) =>{
      return state.filter((product) => product.id !== action.payload.id)
    },
    clearCart: (state, action) =>{
      return[]
    },

    add: (state, action) => {
      const findProudct = state.find((product) => product.id === action.payload.id);
          if( findProudct ){
            findProudct.quantity += 1 ;
          } else{
            const productClone ={ ... action.payload, quantity : 1}
            state.push(productClone);
          }
               localStorage.setItem("cartItems", JSON.stringify(state.cart));

          
    },
  },
});

export const { addToCart, deleteFfomCart, clearCart, add, remove,incermrnt } = CartSlice.actions;

export default CartSlice.reducer;
