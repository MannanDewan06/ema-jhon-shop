import React from 'react';
import "./Cart.css";
const Cart = ({cart}) => {
  let price = 0;
  let shipping = 0;
  for (const product of cart) {
    price+=product.price;
    shipping+=product.shipping;
  }
  let tax = price*.07;
  let grandTotal = price + shipping + tax;
  return (
    <div>
      <p>Selected Item: {cart.length}</p>
      <p>Total Price: {price.toFixed(2)}</p>
      <p>Total Shipping Charge: {shipping.toFixed(2)}</p>
      <p>Tax: {(tax).toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;