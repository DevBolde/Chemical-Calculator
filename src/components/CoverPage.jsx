import React from "react";
import { imageUrl } from "../Img-URL/config";

const Cover () => {

    return(
        <div className="App">
            <header>
            <img src={imageUrl} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}


export default Cover;