import React from 'react'
import ProductTile from '../components/ProductTile'

const ProductTiles = ({ title, items = [] }) => {

  return (
    <section className="__product-grid">
      <div className="container">
        <h1 className='section-title'>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {
            items.map(product => <ProductTile key={product.articleNumber} item={product} />)
          }

        </div>
      </div>
    </section>
  )
}
export default ProductTiles