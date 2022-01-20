export const initialState = {
  cart: [],
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [...state.cart, action.item]
    }
  } else {
    return state
  }
}

export default cartReducer
