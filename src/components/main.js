import React from "react";
import Header1 from "./header1/header1"
import Header2 from "./header2/header2";
import Footer from "./footer/footer";
import Home from "./home/home";

function main(){
    return(
        <div>
            <Header1/>
            <Header2 />
            <Home/>
            <Footer /> 
        </div>
    );
}

export default main;