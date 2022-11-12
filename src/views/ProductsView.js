import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductsSection from '../sections/ProductsSection'
import { useProductContext } from '../contexts/ProductContext'
import ProductTiles from '../sections/ProductTiles'
import SalesNotification from '../components/SalesNotification'
import RelatedProductsSection from '../sections/RelatedProductsSection'

const ProductsView = () => {
  const { flashSaleProducts, getFlashSaleProducts } = useProductContext();
  const { relatedProducts, getRelatedProducts } = useProductContext();

  useEffect(() => {
    getFlashSaleProducts(1)
  }, []);

  useEffect(() => {
    getRelatedProducts(4)
  }, []);

  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <SalesNotification />
      <BreadCrumbSection currentPage="Products" />
      <ProductsSection title="Products" items={flashSaleProducts} />
      <RelatedProductsSection title="Related Products" items={relatedProducts} />
      <FooterSection />
    </>
  )
}
export default ProductsView