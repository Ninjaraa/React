import React from 'react'
import RelatedProducts from '../components/RelatedProducts'

const RelatedProductsSection = ({ title, items = [] }) => {

  return (
    <section className="__related-products">
      <div className="container">
        <h1 className='section-title'>{title}</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {
            items.map(product => <RelatedProducts key={product.articleNumber} item={product} />)
          }

        </div>
      </div>
    </section>
  )
}
export default RelatedProductsSection