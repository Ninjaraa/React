import React from 'react'

const SmallproductCard = ({ item }) => {

  return (
    <div className='small-card-grid'>
      <div className='small-image-placeholder'>
        <img src={item.imageName} alt={item.name} />
      </div>
      <div className='small-card-content'>
        <div className="small-card">
          <div className="small-card-body">
            <p className="small-card-category">{item.category}</p>
            <h5 className="small-card-title">{item.name}</h5>
            <p className="small-card-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <div className="small-card-price">
              <p className="small-card-discount-price">${item.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallproductCard