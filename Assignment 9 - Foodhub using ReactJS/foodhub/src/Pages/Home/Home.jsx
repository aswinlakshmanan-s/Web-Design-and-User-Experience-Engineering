import React from 'react';
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

function Home() {
    const foodItems = [
        {
            id: 1,
            url: "burger.avif",
            title: "Classic Cheeseburger ($8.99)",
        },
        {
            id: 2,
            url: "pizza.avif",
            title: "Margherita Pizza ($10.99)"
        },
        {
            id: 3,
            url: "sushi.avif",
            title: "Assorted Sushi Platter ($15.99)"
        },
        {
            id: 4,
            url: "pasta.webp",
            title: "Spaghetti Bolognese ($12.99)"
        },
        {
            id: 5,
            url: "tacos.jpeg",
            title: "Chicken Tacos ($9.99)"
        },
        {
            id: 6,
            url: "ice-cream.jpeg",
            title: "Chocolate Sundae ($5.99)"
        },
    ];

    return (
        <div>
            <Navbar title="home" />
            <div className="food-title-header" style={{ textAlign: 'center' }}>
                FoodHub
            </div>

            <div className="foods-title">
                <h1 style={{ textAlign: 'center' }}>TOP PICKS</h1>
            </div>
            <div className="foods-container">
                {foodItems.map(foodItem => (
                    <Card
                        key={foodItem.id}
                        src={foodItem.url}
                        title={foodItem.title}
                        buttonText="ADD TO CART"
                        imageStyle="auto"
                        galleryStyle="auto"
                    />
                ))}
            </div>
            <div>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div style={{ textAlign: 'center' }}>
                    <h4>Special Offers</h4>
                </div>

                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Family Feast Combo</td>
                        <td>Combo</td>
                        <td>$39.99</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Vegan Delight Box</td>
                        <td>Vegan</td>
                        <td>$29.99</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Seafood Extravaganza</td>
                        <td>Seafood</td>
                        <td>$49.99</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Sweet Tooth Delight</td>
                        <td>Dessert</td>
                        <td>$15.99</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                </table>
                <br />

                <div style={{ textAlign: 'center' }}>
                    <a href="#">Explore More Food</a>
                </div>

                <br />

            </div>
        </div>
    );
}

export default Home;
