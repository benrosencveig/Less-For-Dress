/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Item extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div className="Item-mainContainer">
                <div className="Item-imageContainer">
                    
                </div>
                <div className="Item-categoryAndLikeContainer">

                </div>
                <div className="Item-priceContainer">
                </div>
            </div>
        );
    }
}

export default Item;