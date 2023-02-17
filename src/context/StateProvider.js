import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {/* stop on 16 feb 
        video timing = 1:19:35
        next go to reducer.js file
        */}
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext)
