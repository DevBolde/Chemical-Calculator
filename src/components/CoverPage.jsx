import React from "react";
import { imageUrl } from "../Img-URL/config";
import { Link } from "react-router-dom";
import '../Style/CoverPage.css'; 
import Footer from "./Footer";

const Cover = () => {
    return (
        <div className="App">
            <header>
                <Link to='/form'>
                    <img src={imageUrl} className="App-logo" alt="logo" />
                </Link>
            </header>
            <div className="title">
                <h1>THE CHEMICAL CALCULATOR</h1>
            </div>
            <footer>
                <h2>**CLICK THE PHOTO TO BEGIN!**</h2>
            </footer>
            <Footer style={{ backgroundColor: '#222', color: 'white'}}/>
        </div>
    );
};

export default Cover;


