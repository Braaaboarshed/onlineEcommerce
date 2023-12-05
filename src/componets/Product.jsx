import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
 <Link to={`/products/${product.id}`}>
    
 <div className="overflow-hidden rounded-lg h-96 shadow-lg">

 <Link to={`/products/${product.id}`}>
    <img  className="block h-60 w-full" alt='imag' src={product.image}/>
</Link>

<header className="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 className="text-lg ">
           {product.title.length < 40 ?
            product.title +'...' :
            product.title.substr(0,30)+'...'
          }
    </h1>
 
</header>

<footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <p className="ml-2 text-sm font-bold">
           ${product.price}
        </p>
  
</footer>

</div>
 </Link>


</div>
  )
}

export default Product