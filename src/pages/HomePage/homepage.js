import React from "react";
import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <Navbar page="home" />
            <header className="header">
                <h1>Image Generator</h1>
                <p>Get inspired with stunning images from Unsplash</p>
            </header>

            <div className="card-container">
                <div className="card">
                    <h2>High-Quality Images</h2>
                    <p>Discover a vast collection of high-resolution images for your projects.</p>
                </div>
                <div className="card">
                    <h2>Seamless Integration</h2>
                    <p>Integrate our image generator into your workflow with ease and efficiency.</p>
                </div>
                <div className="card">
                    <h2>24/7 Support</h2>
                    <p>Contact us anytime for assistance. We're here to help you succeed.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
