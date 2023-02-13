import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    cart: [

    ],
    productList: []
}

const shopReducer = createSlice({
    name: 'shopReducer',
    initialState,
    reducers: {
        getProductListAction: (state, action) => {
            state.productList = action.payload
        },
        addToCart: (state, action) => {
            const cartItem = state.cart.find(item => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                state.cart.push(action.payload)
            }

        },
        deleteCartItem: (state, action) => {
            console.log(action.payload)
            state.cart = state.cart.filter(item=>item.id!==action.payload)
        }
    }
});

export const { getProductListAction, addToCart,deleteCartItem } = shopReducer.actions

export default shopReducer.reducer

// ------------------action thunk
export const getAPI = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get('https://63c63b30dcdc478e15bd64d9.mockapi.io/shoesshop');
            dispatch(
                getProductListAction(res.data)
            )
        } catch (err) {
            console.log(err);
        }
    }
}