import { createContext, useContext, useReducer } from 'react'

// Prepares the Data

export const StateContext = createContext()

// Wrap our App and provide the Data
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>

  )
}
// Pull info from the Data
export const useStateValue = () => useContext(StateContext)