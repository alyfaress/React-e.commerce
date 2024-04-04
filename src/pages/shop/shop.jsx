import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product';
import"./shop.css"

export const Shop = () => {
    return (
        <div className="shop">
          <div className="shopTitle">
            <h1>Tech Shop</h1>
          </div>
    
          <div className="products">
            {PRODUCTS.map((product) => (//we looped by {map through all list items,and we grab the data that comes with each of them by (product)}
              <Product data={product} />//we rendered a componet(Product) when executing map func,to store data in it,so we assign product(data brought by mapping) as prop for father component
            ))}
          </div>
        </div>
      );
    }
