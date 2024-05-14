import React from "react";
import { imageUrl } from "../Img-URL/config";
import { Link } from "react-router-dom";

const Cover = () => {
    return (
        <div>
            <style>
                {`
                    body {
                        background-color: #222;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
            <div className="App">
                <header>
                    <Link to='/form'>
                        <img src={imageUrl} className="App-logo" alt="logo" style={{ marginTop: '10%', paddingBottom: '30px'}}/>
                    </Link>
                </header>
                <div className="title" style={{ marginTop: '10%' }}>
                    <h1 style={{ color: 'blue', fontSize: '24px' }}>THE CHEMICAL CALCULATOR</h1>
                </div>
                <footer>
                    <div>
                        <h2 style={{ color: 'red', fontSize: '40px'}}>**CLICK THE PHOTO TO BEGIN!**</h2>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Cover;

