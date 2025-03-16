import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem, updateQuantity} from './SliceCreate';
import './ItemCart.css';

// Constants for styles
const NAVBAR_STYLE = {
    backgroundColor: 'black',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
};

const NAVBAR_LINKS_STYLE = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
};

const NAV_LINK_STYLE = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
};

// Constants for reusable values
const LOGO_URL =
    'https://cdn5.vectorstock.com/i/1000x1000/54/44/planet-earth-with-plant-logo-design-vector-29145444.jpg';

// Utility functions
const getTotalCartAmount = (cart) =>
    cart.reduce((total, item) => total + item.quantity * parseFloat(item.cost.slice(1)), 0).toFixed(2);

const getItemTotalCost = (item) =>
    (item.quantity * parseFloat(item.cost.slice(1))).toFixed(2);

// Extracted CartItem Component
const CartItem = ({item, onIncrement, onDecrement, onRemove}) => (
    <div className="cart-item" key={item.name}>
        <img className="cart-item-image" src={item.image} alt={item.name}/>
        <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>
            <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => onDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => onIncrement(item)}>+</button>
            </div>
            <div className="cart-item-total">Total: ${getItemTotalCost(item)}</div>
            <button className="cart-item-delete" onClick={() => onRemove(item)}>Delete</button>
        </div>
    </div>
);

const Cart = ({onContinueShopping}) => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({name: item.name, quantity: item.quantity - 1}));
        } else {
            dispatch(removeItem(item));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping();
    };

    return (
        <div>
            <div className="navbar" style={NAVBAR_STYLE}>
                <div className="tag">
                    <div className="poverty">
                        <img src={LOGO_URL} alt="Paradise Nursery Logo"/>
                        <a href="#" style={{textDecoration: 'none'}}>
                            <div className="tag_home_link">
                                <h3 style={{color: 'white'}}>Paradise Nursery</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={NAVBAR_LINKS_STYLE}>
                    <div>
                        <a href="#" style={NAV_LINK_STYLE}>Plants</a>
                    </div>
                    <div className="cart-container" onClick={onContinueShopping}>
                        <a href="#" style={NAV_LINK_STYLE}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="80" cy="216" r="12"></circle>
                                <circle cx="184" cy="216" r="12"></circle>
                                <path
                                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                    fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"></path>
                            </svg>
                            <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="cart-container">
                <h2>Total Cart Amount: ${getTotalCartAmount(cart)}</h2>
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.name}
                            item={item}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>
                <div style={{marginTop: '20px'}} className="total_cart_amount"></div>
                <div className="continue_shopping_btn">
                    <button className="get-started-button" onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                    <br/>
                    <button
                        className="get-started-button1"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;