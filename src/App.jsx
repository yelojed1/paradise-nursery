import {useState} from 'react';
import {Provider} from 'react-redux';
import ListProduct from './ListProduct';
import Cart from './ItemCart';
import store from './store';
import './App.css';
import About from './About';

const LANDING_PAGE_CLASSES = {
    container: "landing-page",
    background: "background-image",
    content: "content",
    landingContent: "landing_content",
    button: "get-started-button",
    aboutContainer: "aboutus_container"
};

function App() {
    const [isProductListVisible, setProductListVisible] = useState(false);
    const [isCartVisible, setCartVisible] = useState(false);

    const handleShowProductList = () => {
        setProductListVisible(true);
        setCartVisible(false);
    };

    const handleShowCart = () => {
        setCartVisible(true);
        setProductListVisible(false);
    };

    const handleShowLandingPage = () => {
        setProductListVisible(false);
        setCartVisible(false);
    };

    const renderLandingPage = () => (
        <div className={LANDING_PAGE_CLASSES.container}>
            <div className={LANDING_PAGE_CLASSES.background}></div>
            <div className={LANDING_PAGE_CLASSES.content}>
                <div className={LANDING_PAGE_CLASSES.landingContent}>
                    <h1>Welcome To Nursery</h1>
                    <button className={LANDING_PAGE_CLASSES.button} onClick={handleShowProductList}>
                        Get Started
                    </button>
                </div>
                <div className={LANDING_PAGE_CLASSES.aboutContainer}>
                    <About/>
                </div>
            </div>
        </div>
    );

    const renderProductList = () => (
        <ListProduct onViewCartClick={handleShowCart}/>
    );

    const renderCart = () => (
        <Cart onContinueShopping={handleShowLandingPage}/>
    );

    return (
        <Provider store={store}>
            <div className="app-container">
                {!isProductListVisible && !isCartVisible && renderLandingPage()}
                {isProductListVisible && !isCartVisible && renderProductList()}
                {isCartVisible && renderCart()}
            </div>
        </Provider>
    );
}

export default App;