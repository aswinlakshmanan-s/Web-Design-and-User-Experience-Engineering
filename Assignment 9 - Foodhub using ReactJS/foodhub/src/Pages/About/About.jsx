import React from 'react';
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';
import "./About.css";

function About() {
    return (
        <div>
            <Navbar title="about" />
            <div className="container-fluid">
                <div className="aboutUs">
                    <center><h1>Explore Culinary Delights Online</h1></center>
                    <center><h3>"FoodHub brings you a revolutionary, hassle-free way to discover and savor a variety of culinary delights online. We specialize in delivering delicious meals from top-rated restaurants, covering a wide range of cuisines. Whether you crave pizza, sushi, burgers, or exotic dishes, FoodHub has you covered. Order your favorite meals conveniently and enjoy doorstep delivery at the best prices available online."</h3></center>
                </div>
            </div>
        </div>
    );
}

export default About;
