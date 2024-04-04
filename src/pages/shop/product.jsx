import React ,{useContext} from "react";
import{ShopContext}from '../../context/shop-context'

export const Product = (props) => {/*using (Props)word as a parameter, lets you think about parent and child components independently. For example, you can change(name of propthats passed by child comp. inside parent comp.but simply writtening prop.nameofpropfrom child ).also you can destructure prop so u write only name given by child comp with{}as a parameter,and delete prop wprd
 the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, you can change how the Avatar uses these props, without looking at the Profile.

  You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object:
  ex:
  function Avatar(props) { ucan also write it destructured=> function Avatar({person,size})
    let person = props.person;
    let size = props.size;*/
  const { id, productName, price, productImage } = props.data;

  const { addToCart,cartItems } = useContext(ShopContext);
     
    const cartItemAmount=cartItems[id];//set it to id of the item ,it will return the id ,which is uptade by 1 every time add button is clicked,so we know the  number of orders(addition to cart) of one item,bring cartItems by adding it in usecontext
    return ( /*this is looped 8 times,try returning only <p>hi</p> there will be 8 of them,that's since the whole component(Product)is assigned in shop.jsx
            to a map func to list having 8 items...,so this comp Product can access items in list(that is map)   */
                <div className="product">
                  <img src={productImage} />
                  <div className="description">
                    <p>
                      <b>{productName}</b>
                    </p>
                    <p> ${price}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                  </div>
                  <button onClick={()=>addToCart(id)/*this func is outside this component and its parents to access it ,we have to implement usecontext:const { addToCart } = useContext(ShopContext);,then import ShopContext...and not to forget to wrap it or its parent comp.(since we can pass prop for child comp. through its parent comp.) with <ShopContextProvider> ,we did it in the App.jsx ,as we wrapped <route> that has element={<Shop/>}*/}
                   className="addToCartBttn" /*this method requires itemId parameter,so we gave it id,since this bottun exists in every item (since we are mapping through the array ,so id for every item exists with it ,since we set { id, productName, price, productImage } = props.data;,and we called then as props in shop.jsx=><Product data={product} />)*/
                    >Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</> /*this line means:if condition is true then do:display<>({cartItemAmount})</>*/}
                  </button>
                </div>
              );
            };
