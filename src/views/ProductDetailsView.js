import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/ProductContext'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductDetails from '../sections/ProductDetails'
import BreadCrumbSection from '../sections/BreadCrumbSection'

const ProductDetailsView = () => {
  const { id } = useParams()
  const { product, getProduct } = useProductContext()

  useEffect(() => {
    getProduct(id)
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadCrumbSection currentPage="Products" />
      <ProductDetails item={product} />
      <FooterSection />
    </>
  )
}

export default ProductDetailsView