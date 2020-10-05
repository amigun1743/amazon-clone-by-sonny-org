import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide the datalayer
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull the information from the datalayer
export const useStateValue = () => useContext(StateContext);
