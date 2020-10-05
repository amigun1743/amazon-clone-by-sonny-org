import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
              <img 
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
              alt=""
              />

              <div className="home__row">
                <Product 
                id="12321341"
                title="the lean startup: How Constant Innovation Creates Radically successful Business Paperback" 
                price={11.95} 
                image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
                rating={5}
                />
                <Product 
                id="495308494"
                title="Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K beater, Dough Hook and Whisk, 5 litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
             </div>

              <div className="home__row">
                <Product 
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX446_.jpg"
                />
                <Product 
                id="23445930"
                title="Amazon Echo (3rd generation)  |  Smart speaker with Alexa Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/552/5828/100/3/740778400/740778400_1_720x928.jpg"
                />
                <Product 
                id="3254354345"
                title="New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
              </div>

              <div className="home__row">
                <Product 
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor Super Ultra Wide Dual WQHD 5120 X 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
              </div>

            </div>
        </div>
    );
}

export default Home;
