import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext=createContext(null);/*it's like the idea of Redux, "createContext" is like a store that keep track of states and 
                                              functions that need to be accessed everywhere in the project                                                */


 const getDefaultCart=()=>{//dont care much about this method(we can find better with same concept),here we created a function get the  array and create an emptyobject to represent our initial state of the cart items,by this we will know how manytime each  item is selected in the cart
   let cart={} //empty object
   for(let i=1;i<PRODUCTS.length+1;i++ ){//loop throught all cart's items,we started with i=1 since usually ids start with 1 not zero(first item in PRODUCT has id:1)
       
    cart[i]=0//give for each cart's item  a key "i" 

   } return cart;
  };
  

  export const ShopContextProvider = (props) => {
      //cartItem differs from PRODUCTS(list),is that PRODUCTS has initially all items however cartItem has only items(with id more than 1) clicked add
    const[cartItems,setcartItems]=useState(getDefaultCart);//shortly "getDefaultCart" will give us object that will be the default state of the cart without adding anything to it
  
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {//this is how to loop inside an object(values that are in the object)(it differs from looping inside lst by map)
        if (cartItems[item] > 0) {//cartItems[item]:is the number of item in cart... ,this means if there exists one or more item in cartItems
          let itemquantity = PRODUCTS.find((product) => product.id === Number(item));//create variable to get item's  number(which will be(i mean the num) same to its id) as known...
          // (product) is parameter,that take an element in the array(in this case its the id) if its equal to item(which is numberof item presented in the list (which is id) ,then assign it to itemquantity                                      //"find" javascript func. that find specific element in an array ,where some part of the array(here it is:product.id) must satisfy a condition(which is: === Number(item)), number() is used to treat what init as num not string
          totalAmount += cartItems[item] * itemquantity.price;//if you are smart enough you shoud have noticed that cartItems[item] is equal to itemquantity(they both are the id of object in list),how every we used itemquantity the target an info inside(by.find) the list(which is price,price is prop defined in product.jsx,which refer to product.js) by using the id by(itemquantity.price),so id alone is not required alone as it was required  we could have used cartItems[item]
          //so :total=numberofitempresentedin list x priceof thisitem
          console.log(itemquantity)//for testing to prove it is equal to id(nmber of product presente in list)      
        }
      }
      
      return totalAmount;//it is imp at the end of the loop return totalamount 
    };
  


    const addToCart = (itemId) => {//takes parameter named itemId
      setcartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));};//setca..which is a statemethod,it is  settled to an anonymous func that will take state(cartItem)which is an  object(thats why we used {})  as a parameter called (prev),then we will return state(the object and whats in it) as it is by spread(...),and will target the something in it(given id,  that refers to the taken id(itemId)) and modify it,idname is taken as parameter in the main func,and then add 1 to the value of its id=> this is how to item for mnay times to cart
 
                                                                  //we have to pass these 2 methods to provider in context,inorder to have access to them out side of this component
    const removeFromCart = (itemId) => {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));};
    const updateCartItem=(newAmount,itemId)=>{//this func takes 2 parameters,newAmount which is the num written in <input> and the id

      setcartItems((prev) => ({ ...prev, [itemId]: newAmount }));};//we assigned id to the written in <input>
      //create an object and pass to it we want to access(out in the provider),and pass it to provider
        const contextValue={cartItems,addToCart,removeFromCart,updateCartItem,getTotalCartAmount}
        console.log(cartItems)//imp for testing
    return ( //i will explain context and provider concepts inside app.jsx
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>////i.note:we should import ShopContext when ever we use whats in tis value(whats in contextValue) ,also we have to wrap all elemnts (in App.jsx)with <ShopContextProvider> so that they can access value
                                                                                    //"props.children" returns the value between <></>
  );
};
