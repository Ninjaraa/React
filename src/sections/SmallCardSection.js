import React from 'react'
import SmallproductCard from '../components/SmallProductCard'

const SmallCardSection = ({ items = [] }) => {
  return (
    <section className="__small-card-section">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='small-card-headline'>Latest Product</h1>

            {
              items.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }
          </div>

          <div className='col'>
            <h1 className='small-card-headline'>Best Selling Products</h1>

            {
              items.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }
          </div>

          <div className='col'>
            <h1 className='small-card-headline'>Top Reacted Product</h1>

            {
              items.map(product => <SmallproductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
      </div>
      <hr></hr>
    </section>

  )
}

export default SmallCardSection