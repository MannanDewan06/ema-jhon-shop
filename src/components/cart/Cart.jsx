import React from 'react';
import "./Cart.css";
const Cart = ({cart}) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity+=product.quantity;
    price+=(product.price * product.quantity);
    shipping+=(product.shipping * product.quantity);
  }
  let tax = price*.07;
  let grandTotal = price + shipping + tax;
  return (
    <div>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: {price.toFixed(2)}</p>
      <p>Total Shipping Charge: {shipping.toFixed(2)}</p>
      <p>Tax: {(tax).toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;