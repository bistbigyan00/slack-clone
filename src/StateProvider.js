// for user login, context api is used because we want to use it from any component

import React,
{ createContext, useContext, useReducer }
from'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* children is our app */}
        {/* push the user after login */}
        {/* its the data layer */}
        {children}
    </StateContext.Provider>
);

//access information from data layer
export const useStateValue = () => useContext(StateContext);