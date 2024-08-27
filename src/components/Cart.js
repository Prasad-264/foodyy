import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  }
  return (
    <div className="max-w-4xl mx-auto m-2 p-2">
      <h1 className="text-2xl font-semibold text-center">Cart</h1>
      <div className="text-center m-2">
        <button
          className="font-semibold text-white px-2 py-1 rounded-lg bg-black"
          onClick={handleClear}
        >
          Clear Cart
        </button>
      </div>
      <ItemList items={cartItems} />
      {cartItems.length === 0 && (
        <h1 className="font-semibold text-lg py-2 text-center">
          Add items to cart, and enjoy food!!
        </h1>
      )}
    </div>
  );
};

export default Cart;
