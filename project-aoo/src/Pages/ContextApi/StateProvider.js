// setup data layer 
// we need this to track the baseket 

import { useReducer } from "react";
import { createContext ,useContext} from "react";

// this is data leyer
export const StateContext =createContext() ; 

// Build A provider 

export const StateProvider = ({reducer,initialState,children})=>
(
    <StateContext.Provider value ={useReducer(reducer,initialState) }>
        {children } 
        </StateContext.Provider>

)
// this is how we use it inside of a component 
export const useStateValue = () => useContext(StateContext)