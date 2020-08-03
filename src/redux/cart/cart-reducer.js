import CartActionTypes from './cart-types'
import {addItemToCard } from './cart-utility'

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCard(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default CartReducer