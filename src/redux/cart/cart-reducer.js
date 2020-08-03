import CartActionTypes from './cart-types'
import {addItemToCard } from './cart-utility'

const INITIAL_STATE={
    hidden:true,
    cardItems:[]
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
                cardItems:addItemToCard(state.cardItems, action.payload)
            }
        default:
            return state
    }
}
export default CartReducer