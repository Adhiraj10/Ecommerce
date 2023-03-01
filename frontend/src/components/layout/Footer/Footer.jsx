import React from 'react';
import "./Footer.css"
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";

export const Footer = () => {
    return (
        <footer>
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img alt="playstore" />
                <img alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>ECOMMERCE</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2021 &copy; Adhiraj</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="#">Instagram</a>     {/*placeholder urls for now*/}
                <a href="#">Youtube</a>
                <a href="#">Facebook</a>
            </div>
        </footer>
    );
}

