import React from 'react';


import Header from'../components/Header';
import MainCarousel from'../components/MainCarousel';
import TextBlock from'../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <div>
            <Header/>
            <MainCarousel/>
            <TextBlock
            title="Shop now"
                description="An intuitive inventory management system designed for auto parts businesses.
                    Manage fitment, stock, pricing, and more all from one easy location."
            />
           

            <div className="container">
                <ImageBlock 
                imgSrc="./images/discs.jpg"
                    className="size-33" titlu="About us"/>
                
                 

                <ImageBlock
                    imgSrc="./images/lights.jpg"
                    className="size-33" titlu="More parts" />

                <ImageBlock
                    imgSrc="./images/rings.jpg"
                    className="size-33" titlu="Visit us"/>
                    

            </div>

            <Footer/>
           
        </div>
    );
}

export default Homepage;
