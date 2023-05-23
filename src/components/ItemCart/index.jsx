import React from 'react'

export default function ItemCart({ product, setProductsList
   , setCartList }) {


   return (
      <li key={product.id} >
         <p>{product.name}</p>
         <h2>{product.icon}</h2>
         <h2>{product.inCart}</h2>
      </li>
   )
}
