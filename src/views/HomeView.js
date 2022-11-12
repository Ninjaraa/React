import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import SeasonSaleSection from '../sections/SeasonSaleSection'
import OurSpecialitySection from '../sections/OurSpecialitySection'
import TopPicksSection from '../sections/TopPicksSection'
import ProductTiles from '../sections/ProductTiles'
import DiscountSection from '../sections/DiscountSection'
import CustomerServiceSection from '../sections/CustomerServiceSection'
import { useProductContext } from '../contexts/ProductContext'
import FlashSaleCardSection from '../sections/FlashSaleCardSection'
import FlashSaleCardRightSection from '../sections/FlashSaleCardRightSection'
import SmallCardSection from '../sections/SmallCardSection'

const HomeView = () => {
  const { featuredProducts, getFeaturedProducts } = useProductContext()
  const { flashSaleProducts, getFlashSaleProducts } = useProductContext()
  const { smallCardProduct, getSmallCardProduct } = useProductContext()

  useEffect(() => {
    getFeaturedProducts(8)
  }, [])

  useEffect(() => {
    getFlashSaleProducts(2)
  }, [])

  useEffect(() => {
    getSmallCardProduct(3)
  }, [])

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowCaseSection />
      </header>
      <SeasonSaleSection />
      <ProductTiles title="Featured Products" items={featuredProducts} />
      <TopPicksSection />
      <OurSpecialitySection title="Our Speciality" />
      <FlashSaleCardSection items={flashSaleProducts} />
      <FlashSaleCardRightSection items={flashSaleProducts} />
      <DiscountSection />
      <SmallCardSection items={smallCardProduct} />
      <CustomerServiceSection />
      <FooterSection />
    </>
  )
}
export default HomeView