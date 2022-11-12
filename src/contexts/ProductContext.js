import { useContext, useState } from "react"
import { createContext } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [flashSaleProducts, setFlashSaleProducts] = useState([])
    const [smallCardProduct, setSmallCardProduct] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    const getFlashSaleProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFlashSaleProducts(await res.json())
    }

    const getSmallCardProduct = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setSmallCardProduct(await res.json())
    }

    const getRelatedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setRelatedProducts(await res.json())
    }

    return <ProductContext.Provider value={{ product, products, featuredProducts, flashSaleProducts, smallCardProduct, relatedProducts, getProducts, getFeaturedProducts, getProduct, getFlashSaleProducts, getSmallCardProduct, getRelatedProducts }}>
        {children}
    </ProductContext.Provider>
}