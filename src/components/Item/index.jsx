

export default function Item({ product, setProductsList
   , setCartList, children }) {

   function addToCart() {
      if (product.inStock) {

         setCartList((prev) => {
            if (prev.find(p => p.id === product.id)) {
               return prev.map(p => p.id === product.id ? { ...p, inCart: p.inCart + 1 } : p)
            } else {
               return [{ ...product, inCart: 1 }, ...prev]
            }
         })

         // TODO - reduce from product list
      }
   }

   return (
      <>
         <li key={product.id} onClick={addToCart}>
            <p>{product.name}</p>
            <h2>{product.icon}</h2>
            <h2>{product.inStock}</h2>
            {children}
         </li>
      </>
   )
}
