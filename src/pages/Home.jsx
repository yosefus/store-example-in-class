import React, { useContext, useState } from 'react'
import { cities, products } from './data'
import List from '../components/List'
import styles from './style.module.css'
import Item from '../components/Item'
import ItemCart from '../components/ItemCart'
import { ThemeContect } from '../App'

// children
// context - global states
export default function Home() {
   const [productsList, setProductsList] = useState(products)
   const [cartList, setCartList] = useState([])
   const [isDark] = useContext(ThemeContect)

   return (
      <div className={`${styles.home} ${isDark ? styles.dark : ''}`}>
         <ul>
            {productsList.map(product =>
               <Item
                  product={product}
                  key={product.id}
                  setProductsList={setProductsList}
                  setCartList={setCartList}
               >
                  <p>hiiii</p>
                  <p>{product.price}</p>
               </Item>

            )}
         </ul>
         <ul>
            {cartList.map(product =>
               <ItemCart
                  product={product}
                  key={product.id}
                  setProductsList={setProductsList}
                  setCartList={setCartList}
               />
            )}
         </ul>
      </div>
   )
}
