import React from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './views/ContactView';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView'
import { ProductProvider } from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import ExternalLinks from './unittests/ExternalLinks';


function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="*" element={<NotFoundView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />
          </Routes>
        </ProductProvider>
        </ShoppingCartProvider>
    </BrowserRouter>
  );
}
export default App;
