
import React, { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const intialState={
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[]
}

const AppProvider = ({ children }) => {

  const [state, dispatch]=useReducer(reducer, intialState);

    const getProducts = async (url) => {
      dispatch({type:"SET_LOADING"});
      try {
        const res = await fetch(
          url,
          {
            method:"GET",
            headers: {
              "Content-Type": "application/json",
             // Authorization: "Bearer " + localStorage.getItem("token"),
            }
          });
  
        const products= await res.json();
        console.log(products);
        dispatch({ type:"SET_API_DATA", payload: products});

      } catch (error) {
        dispatch({type:"API_ERROR"});
      }
       
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
}

export  { AppProvider, useProductContext };
