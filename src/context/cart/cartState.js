import { useReducer, useEffect, useState } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";
import { getAllProducts } from "../../api";

const CartState = ({ children }) => {
  const initState = {
    showCart: false,
    cartItems: []
  };
  
  const [products, setProducts] = useState();
  const [state, dispatch] = useReducer(CartReducer, initState);
  //Get data from API
    const getProducts = async () =>{
        let data = await getAllProducts();
        if (data) setProducts(data);
        console.log('Data from Context', data);
    }
  //Add items to cart
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  //show list item from cart
  const showHideCart = (id) => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  //remove item from cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  useEffect(() => {
    getProducts()
    
  }, [])

  //data from API
    const value = {
      products: [products, setProducts]
    }

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        value: value.products,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >{children}</CartContext.Provider>
  );
};

export default CartState;
