/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Item extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        console.log('my item: ', this.props.item);
        return (
            <div className="Item-mainContainer">
                <div className="Item-imageContainer">
                    <img className="Item-image" src={this.props.item.image} />
                </div>
                <div className="Item-categoryAndLikeContainer">
                    <div className="smallText itemText">
                        {this.props.item.subCategory}
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className="dummyLine"/>
                </div>
                <div className="Item-priceContainer">
                    <div className="smallText itemText">
                        {`Price: ${this.props.item.price}`}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;