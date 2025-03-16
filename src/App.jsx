import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ListProduct from './ListProduct';
import Cart from './ItemCart';
import store from './store';
import './App.css';
import About from './About';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleViewCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShoppingClick = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        {!showProductList && !showCart && (
          <div className="landing-page">
            <div className="background-image"></div>
            <div className="content">
              <div className="landing_content">
                <h1>Welcome To Nursery</h1>
                <button className="get-started-button" onClick={handleGetStartedClick}>
                  Get Started
                </button>
              </div>
              <div className="aboutus_container">
                <About />
              </div>
            </div>
          </div>
        )}
        {showProductList && !showCart && (
          <ListProduct onViewCartClick={handleViewCartClick} />
        )}
        {showCart && (
          <Cart onContinueShopping={handleContinueShoppingClick} />
        )}
      </div>
    </Provider>
  );
}

export default App;
