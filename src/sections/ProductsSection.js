import React from 'react'
import ProductDetails from '../components/ProductDetails'

const ProductsSection = ({ items = [] }) => {

  return (
    <>
      {
        items.map(product => <ProductDetails key={product.articleNumber} item={product} />)
      }
    </>
  )
}
export default ProductsSection