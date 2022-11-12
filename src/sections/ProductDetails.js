import React from 'react'

const ProductDetails = ({ item }) => {
  return (
    <>
      <div className='product-details'>
        <div className='container'>
          <div>
            <h1>{item.name}</h1>
            <img src={item.imageName} alt={item.name} />
          </div>
          <div>
            <p>$ {item.price}</p>
          </div>
          <div>
            <button className="btn-dark-theme">ADD TO BASKET</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails