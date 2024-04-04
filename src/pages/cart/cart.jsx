import {PRODUCTS} from "../../products"
import {ShopContext} from "../../context/shop-context"
import {CartItem} from "../cart/cart-item"
import { useContext } from "react";
import './cart.css'
import {useNavigate}from 'react-router-dom'

export const Cart = () => {

  const { cartItems ,getTotalCartAmount} = useContext(ShopContext);
const totalAmount=getTotalCartAmount()
 
const nagivate=useNavigate()//grab useNavigate and store it in navigate
                            // useNavigate  state allows us to navigate to other pages,we have to import it,import {useNavigate}from 'react-router-dom'
return (
    <div className="cart">
    <div>
      <h1>Your Cart Items</h1>
    </div>
    <div className="cart">
        {PRODUCTS.map((product) => {//here we mapped through list PRODUCTS(that has data of items in products.js),and we will check if item while has an id >0 ,we will return it ,since this means the item is added button is clicked and this has to go to cart
          if (cartItems[product.id] ) {//V.v.imp:its enough for the condition to be if it exists in the cartItems (and no need to add cartItems[product.id] !==0,as pedrotech did),since already what are in cartItems has id greater than zero,the condition would be true incase:PRODUCTS[product.id],revise difference between cartItem and PRODUCTS in shop-context.jsx above state exists a comment ,bring cartItems from useContext.
            return <CartItem data={product} />;//cartItem will be responsible for how item will be displayed in cart 
          }
        })}
      </div>
{totalAmount>0?(
<div className="checkout">{/*this div will be displayed (with the total=0 and the buttons)even if we dont have any thing in the cart,which we dont want,
                              so we nest the whole div in a condition if totalamount>o  then display the div*/}
<p>Subtotal:$ {totalAmount}</p>
<button onClick={()=>nagivate("/")}>Continue Shopping</button>{/*inside navigate method we put the path we want to go to */}
<button>Checkout</button>
</div>)/*this is ternary operator,if totalAmount>0 execute thats in parathesis,otherwiseexecute whats after ":" ,which is */
      :(<h1>your cart is empty</h1>)
            }
    </div>)
}
