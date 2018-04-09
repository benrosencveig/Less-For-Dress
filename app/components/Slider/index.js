import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './sliderStyle.css';

class Slider extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        title: PropTypes.string,
    }

    render() {
        return (
            <div className="Slider-mainContiner">
                {
                    this.props.items.map(item => <Item key={item.id} item={item}/>)
                }
            </div>
        );
    }
}

export default Slider;