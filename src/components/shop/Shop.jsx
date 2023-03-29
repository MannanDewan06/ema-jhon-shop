import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    const isExist = cart.find(pd => pd.id === product.id);
    if(!!isExist) {
      isExist.quantity += 1;
      const remainingProducts = cart.filter(pd => pd.id !== isExist.id);
      let updatedProductInCart = [...remainingProducts,isExist];
      setCart(updatedProductInCart);
    }
    else{
      product.quantity = 1;
      let addedProductInCart = [...cart,product];
      setCart(addedProductInCart);
    }
    addToDb(product.id);
  }
  useEffect(() => {
    const getStoredCart = getShoppingCart();
    let productsInCart = [];
    for (const id in getStoredCart) {
      const matchingProduct =  products.find(product => product.id === id );
      if(!!matchingProduct) {
        const quantity = getStoredCart[id];
        matchingProduct.quantity = quantity;
        productsInCart = [...productsInCart,matchingProduct];
      }
     }
    setCart(productsInCart);
  },[products]);
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