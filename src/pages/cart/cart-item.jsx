import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItem } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}/*set onclick to same removef..method since it has same role
                                                    when id is equal to zero the cart will vanish from cartItem so it well not be displayed,that why we wil not see -1 */> - </button > 
          
          <input  value={cartItems[id]} //to display value of added items,assign <input> value to  cartItems[id],bring cartItems from useContext and import useContext
           //imp concept:we want to edit the input and write in it number we want to add rather than just pressing (+),this is beneficial incase we want to add high number like 50
           /*step to do it:
           1-grab input value(in this case:num)by:onChange
           2-implement a func.(updatecartitem) that will set id in cartItem equals to written num in <input>,i will locate in in shop-context.jsx
           3-assign onclick to updatecartitem,dont forget to put it in useContext
           */
           onChange={(e) => updateCartItem(Number(e.target.value), id)}//this anony. func will take whats written in <input> as parameter "e" and give it and item's id to func updateCartItem((e.target.value),id), value of e will b eread as string so we have to convert it to num inorder to assign it later to id in cartItem ,so we used number() 
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};