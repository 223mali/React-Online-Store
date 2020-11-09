import CartActionType from './cart.types'

const {TOGGLE_CART_HIDDEN} = CartActionType

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_CART_HIDDEN: 
        return {
            ...state,
            hidden: !state.hidden
        }

        default:
            return state
    }
}

export default cartReducer