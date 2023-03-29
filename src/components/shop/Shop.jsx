import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import "./Shop.css"
const Shop = () => {
  const [products,setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data));
  },[]);
  let handleAddtoCart = (product) => {
    let addedProductInCart = [...cart,product];
    setCart(addedProductInCart);
  }
  return (
    <section className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product 
             key={product.id} 
             product={product} handleAddtoCart = {handleAddtoCart}>
            </Product>)
        }
      </div>
      <div className='cart-container'>
        <div  className='cart'>
          <h5>Order Summary</h5>
          <div className='cart-detail'>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;