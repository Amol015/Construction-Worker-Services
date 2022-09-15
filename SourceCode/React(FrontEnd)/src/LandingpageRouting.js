import React from 'react'
import Presentation from "./component/Presentation";
import Header from "./component/Header";
import Feature from "./component/Feature";
import About from "./component/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Contact from "./component/Contact";

export default function LandingpageRouting() {
    return (
        <div>
            <Header></Header>
            <Feature />



            <About image={aboutimage1} title='About Us' content='We have created a platform, which works as online marketplace where different types of service providers in the construction field such as painter, plumber, interior designer, electrician, etc. are listed. This website connects service providers with customer and builders. Service provider can maintain and update their profile with ease and accept the booking of work requested by customer. Website takes responsibility to not overlap the different projects of same service provider. Website also maintains proper feedback module where user can give feedback and use it while choosing correct service provider. Customer and service provider can resolve the dispute on the website and make sure the work is completed without error. After work is completed, invoice will be generated for given work with the help of data like number of days, charges of service provider.' button='Know more'></About>
            <About image={aboutimage} title='Why Six Star Services?' content='Transparent Pricing : See Fixed Price before you book No Hidden Charges.' button='Book your Service'></About>
            <Presentation />
            <Contact />
        </div>

    )
}





