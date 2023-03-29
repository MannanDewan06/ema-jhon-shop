import React from 'react';
import "./Product.css";
const Product = (props) => {
  const {price,img,name,seller,ratings} = props.product;
  const handleAddtoCart = props.handleAddtoCart;
  return (
    <div className='product-detail'>
        <img src={img} alt="" />
        <div className='product-info'>
          <h6>{name}</h6>
          <p>Price: {price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings}</p>
        </div>
        <button onClick={() => handleAddtoCart(props.product)} className='btn-add-cart'>Add to Cart</button>
    </div>
  );
};
export default Product;