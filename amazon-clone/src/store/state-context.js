import { createContext, useContext, useReducer } from 'react'

// Prepares the Data

const StateContext = createContext()

// Wrap our App and provide the Data
export const StateProvider = ({ reducer, initialState, children }) => {

  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
}
// Pull info from the Data
export const useStateValue = () => useContext(StateContext)

export default StateContext