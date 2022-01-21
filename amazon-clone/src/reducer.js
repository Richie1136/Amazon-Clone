export const initialState = {
  cart: [],
  user: null
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)


const cartReducer = (state, action) => {
  console.log(action)
  if (action.type === 'ADD_TO_CART') {

    return {
      ...state,
      cart: [...state.cart, action.item],
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    return state.cart.findIndex((item) => item.id === action.id)
  }


  else {
    return state
  }
}

export default cartReducer