import React, { useState } from 'react';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import greyHoddie from '../images/greyhoddie.jpg';
import blackHoddie from '../images/blackhoddie.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={greyTshirt} alt="Grey Tshirt" />
                <h3>Grey Tshirt</h3>
                <h3>$12,00</h3>
                <a onClick={() => props.addBasket('greyTshirt')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={blackTshirt} alt="Black Tshirt" />
                <h3>Black Tshirt</h3>
                <h3>$14,00</h3>
                <a onClick={() => props.addBasket('blackTshirt')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={greyHoddie} alt="Grey Hoddie" />
                <h3>Grey Hoddie</h3>
                <h3>$35,00</h3>
                <a onClick={() => props.addBasket('greyHoddie')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={blackHoddie} alt="Black Hoddie" />
                <h3>Black Hoddie</h3>
                <h3>$35,00</h3>
                <a onClick={() => props.addBasket('blackHoddie')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            
        </div>
    );
}

export default connect(null, { addBasket })(Home);