import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Slises/Product-slice'
import CartSlice from './Slises/Cart-Slice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        Cart: CartSlice,
        
    }
})
