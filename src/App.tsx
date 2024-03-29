import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getProductsInCart } from './actions/products';
import CartPage from './components/cart/CartPage';
import FavoritePage from './components/favorite/FavoritePage';
import Header from './components/header/Header';
import { useTypedSelector } from './components/hooks/useTypedSelector';
import MainPage from './components/main/MainPage';
import ProductPage from './components/product/ProductPage';
import Workbench from './components/workbench/Workbench';
import { IProductInCart } from './types/products';
const s = require('./app.module.css')

function App() {

  const dispatch = useDispatch()

  const { productsInCart } = useTypedSelector(state => state.products)

  useEffect(() => {
    // dispatch<any>(getProducts());
  }, [])
  const productsInCartStorage: IProductInCart[] = JSON.parse(localStorage.getItem('productsInCart') || '[]');
  const productsInFavoriteStorage = JSON.parse(localStorage.getItem('productsInFavorite') || '[]');
  
  return (
    <div className={s.glob}>
      <BrowserRouter>
        <Header 
          productsInCartStorage={productsInCartStorage}
          productsInFavoriteStorage={productsInFavoriteStorage} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/workbench' element={<Workbench />} />
          <Route path='/cart' element={<CartPage productsInCartTEST={productsInCart} />} />
          <Route path='/favorites' element={<FavoritePage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;
