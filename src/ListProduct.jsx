import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './SliceCreate';
import './ListProduct.css';

function ListProduct({ onViewCartClick }) {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }));
    };
  
    const plantsArray = [
        {
            category: "Plants Category 1",
            plants: [
                {
                    name: "Plant 1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$11"
                },
                {
                    name: "Plant 2",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$12"
                },
                {
                    name: "Plant 3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$13"
                },
                {
                    name: "Plant 4",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$14"
                },
                {
                    name: "Plant 5",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$15"
                },
                {
                    name: "Plant 6",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$16"
                }
            ]
        },
        {
            category: "Plants Category 2",
            plants: [
                {
                    name: "Plant 1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$11"
                },
                {
                    name: "Plant 2",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$12"
                },
                {
                    name: "Plant 3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$13"
                },
                {
                    name: "Plant 4",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$14"
                },
                {
                    name: "Plant 5",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$15"
                },
                {
                    name: "Plant 6",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$16"
                }
            ]
        },
        {
            category: "Plants Category 3",
            plants: [
                {
                    name: "Plant 1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$11"
                },
                {
                    name: "Plant 2",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$12"
                },
                {
                    name: "Plant 3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$13"
                },
                {
                    name: "Plant 4",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$14"
                },
                {
                    name: "Plant 5",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$15"
                },
                {
                    name: "Plant 6",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$16"
                }
            ]
        },
        {
            category: "Plants Category 4",
            plants: [
                {
                    name: "Plant 1",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$11"
                },
                {
                    name: "Plant 2",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$12"
                },
                {
                    name: "Plant 3",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$13"
                },
                {
                    name: "Plant 4",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$14"
                },
                {
                    name: "Plant 5",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$15"
                },
                {
                    name: "Plant 6",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/800px-Darlingtonia_californica_ne1.JPG",
                    description: "Lorem ipsum",
                    cost: "$16"
                }
            ]
        }
    ];

    const navbarStyle = {
        backgroundColor: 'black',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const navLinksStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const linkStyle = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    const iconStyle = {
        height: '68px',
        width: '68px',
    };

    const renderNavbarLinks = () => (
        <div style={navLinksStyle}>
            <div><a href="#" style={linkStyle}>Plants</a></div>
            <div className="cart-container" onClick={handleViewCartClick}>
                <a href="#" style={linkStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor"
                         style={iconStyle}>
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="80" cy="216" r="12"></circle>
                        <circle cx="184" cy="216" r="12"></circle>
                        <path
                            d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                            fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            id="mainIconPathAttribute"></path>
                    </svg>
                    <span className="cart-count">{cartItemsCount}</span>
                </a>
            </div>
        </div>
    );

    const handleViewCartClick = () => {
        onViewCartClick();
    };

    const renderProductList = (plants) => (
        plants.map((plant, plantIndex) => (
            <div key={plantIndex} className="product-card">
                <img className="product-image" src={plant.image} alt={plant.name}/>
                <h3 className="product-title">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-price">{plant.cost}</p>
                <button
                    className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        ))
    );

    const renderCategories = () => (
        plantsArray.map((category, index) => (
            <div key={index}>
                <h2 className="plantname_heading">{category.category}</h2>
                <div className="product-list">
                    {renderProductList(category.plants)}
                </div>
            </div>
        ))
    );

    return (
        <div>
            <div className="navbar" style={navbarStyle}>
                <div className="tag">
                    <div className="poverty">
                        <img
                            src="https://cdn5.vectorstock.com/i/1000x1000/54/44/planet-earth-with-plant-logo-design-vector-29145444.jpg"
                            alt=""/>
                        <a href="#" style={{textDecoration: 'none'}}>
                            <div className="tag_home_link">
                                <h3 style={{color: 'white'}}>Paradise Nursery</h3>
                            </div>
                        </a>
                    </div>
                </div>
                {renderNavbarLinks()}
            </div>
            <div className="product-grid">
                {renderCategories()}
            </div>
        </div>
    );
}

export default ListProduct;
